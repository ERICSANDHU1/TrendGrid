'use server';

import { connectToDatabase } from "@/database/mongoose";
import { auth } from "@/lib/better-auth/auth";
import { WatchlistModel, WatchlistItem } from "@/database/models/watchlist.model";
import { headers } from 'next/headers';

/**
 * Get watchlist symbols for the currently authenticated user (via session).
 */
export async function getWatchlistSymbols(): Promise<string[]> {
    try {
        await connectToDatabase();

        const headerList = await headers();
        const session = await auth.api.getSession({ headers: new Headers(headerList) });
        const user = session?.user;

        if (!user?.id) {
            console.error('User not found');
            throw new Error('User not found');
        }

        const watchlistItems = await WatchlistModel.find({ userId: user.id }).select('symbol -_id');
        return watchlistItems.map((item: WatchlistItem) => item.symbol);
    } catch (error) {
        console.error('Error fetching watchlist symbols:', error);
        return [];
    }
}

/**
 * Get watchlist symbols for a user by their email (used by Inngest).
 */
export async function getWatchlistSymbolsByEmail(email: string): Promise<string[]> {
    try {
        await connectToDatabase();

        const watchlistItems = await WatchlistModel.find({ userEmail: email }).select('symbol -_id');
        return watchlistItems.map((item: WatchlistItem) => item.symbol);
    } catch (error) {
        console.error(`Error fetching watchlist for ${email}:`, error);
        return [];
    }
}

/**
 * Add a stock to the authenticated user's watchlist.
 */
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
            userEmail: user.email, // ✅ Make sure to include this field in your schema
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
