'use server';

import { connectToDatabase } from "@/database/mongoose";
import { auth } from "@/lib/better-auth/auth";
import { WatchlistModel, WatchlistItem } from "@/database/models/watchlist.model";
import { headers } from 'next/headers';

export async function getWatchlistSymbols(): Promise<string[]> {
    try {
        const connection = await connectToDatabase();

        const headerList = await headers();
        const session = await auth.api.getSession({ headers: new Headers(headerList) });
        const user = session?.user;

        if (!user?.id) {
            console.error('User not found');
            throw new Error('User not found');
        }

        const watchlistItems = await WatchlistModel.find({ userId: user.id }).select('symbol -_id');
        const symbols = watchlistItems.map((item: WatchlistItem) => item.symbol);
        return symbols;
    } catch (error) {
        console.error('Error fetching watchlist symbols:', error);
        return [];
    }
}

export async function addStockToWatchlist(symbol: string, company: string) {
  try {
    await connectToDatabase();

    const headerList = await headers();
    const session = await auth.api.getSession({ headers: new Headers(headerList) });
    const user = session?.user;

    if (!user?.id) {
      console.error('User not found');
      throw new Error('User not found');
    }

    const newItem = new WatchlistModel({
      userId: user.id,
      symbol: symbol.toUpperCase(),
      company: company,
    });

    await newItem.save();
    return { success: true, message: 'Stock added to watchlist' };
  } catch (error: any) {
    if (error.code === 11000) {
      return { success: false, message: 'Stock is already in your watchlist' };
    }
    console.error('Error adding stock to watchlist:', error);
    return { success: false, message: 'Failed to add stock to watchlist' };
  }
}
