"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const WATCHLIST_TABLE_HEADER = ["Symbol", "Company", "Added At"];

const WatchlistTable = () => {
  const watchlistData: any[] = []; // empty by default

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <Table>
        <TableCaption className="text-muted-foreground mt-2">
          {watchlistData.length === 0
            ? "You haven’t added any stocks to your watchlist yet."
            : "A list of your followed stocks."}
        </TableCaption>

        <TableHeader>
          <TableRow className="bg-muted/50">
            {WATCHLIST_TABLE_HEADER.map((header) => (
              <TableHead key={header} className="text-left font-semibold">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {watchlistData.length > 0 ? (
            watchlistData.map((row, index) => (
              <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                <TableCell className="text-left font-medium">{row.symbol}</TableCell>
                <TableCell className="text-left">{row.company}</TableCell>
                <TableCell className="text-left text-muted-foreground">
                  {row.addedAt}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={WATCHLIST_TABLE_HEADER.length}
                className="text-center py-8 text-muted-foreground"
              >
                No items in your watchlist.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default WatchlistTable;
