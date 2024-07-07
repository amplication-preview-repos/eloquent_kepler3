import { DvachPost as TDvachPost } from "../api/dvachPost/DvachPost";

export const DVACHPOST_TITLE_FIELD = "author";

export const DvachPostTitle = (record: TDvachPost): string => {
  return record.author?.toString() || String(record.id);
};
