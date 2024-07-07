import { DvachPost } from "../dvachPost/DvachPost";

export type NeuralNetResponse = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  content: string | null;
  dvachPost?: DvachPost | null;
};
