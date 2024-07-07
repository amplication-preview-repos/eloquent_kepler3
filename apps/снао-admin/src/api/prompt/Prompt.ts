import { DvachPost } from "../dvachPost/DvachPost";

export type Prompt = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  timestamp: Date | null;
  dvachPost?: DvachPost | null;
};
