'use client';

import React, { useState, useEffect } from 'react';
import { addStockToWatchlist, getWatchlistSymbols } from '@/lib/actions/watchlist.actions';

interface WatchlistButtonProps {
  symbol: string;
  company: string;
}

const WatchlistButton: React.FC<WatchlistButtonProps> = ({ symbol, company }) => {
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  useEffect(() => {
    const fetchWatchlist = async () => {
      const watchlistSymbols = await getWatchlistSymbols();
      setIsInWatchlist(watchlistSymbols.includes(symbol));
    };

    fetchWatchlist();
  }, [symbol]);

  const handleAddToWatchlist = async () => {
    const result = await addStockToWatchlist(symbol, company);
    if (result?.success) {
      setIsInWatchlist(true);
    } else {
      alert(result?.message || 'Failed to add stock to watchlist');
    }
  };

  return (
    <button
      onClick={handleAddToWatchlist}
      className="hover:text-yellow-500 transition-colors"
    >
      {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
    </button>
  );
};

export default WatchlistButton;
