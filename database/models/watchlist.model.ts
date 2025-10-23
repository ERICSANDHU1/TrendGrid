import mongoose, { Schema, Document, Model } from 'mongoose';

interface WatchlistItem extends Document {
  userId: string;
  symbol: string;
  company: string;
  addedAt: Date;
}

const WatchlistSchema: Schema = new Schema({
  userId: { type: String, required: true, index: true },
  symbol: { type: String, required: true, uppercase: true, trim: true },
  company: { type: String, required: true, trim: true },
  addedAt: { type: Date, default: Date.now },
});

WatchlistSchema.index({ userId: 1, symbol: 1 }, { unique: true });

const WatchlistModel = (mongoose.models?.Watchlist ||
  mongoose.model('Watchlist', WatchlistSchema)) as Model<WatchlistItem>;

export { WatchlistModel };
export type { WatchlistItem };
