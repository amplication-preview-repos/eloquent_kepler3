import { NeuralNetResponse } from "../neuralNetResponse/NeuralNetResponse";
import { Prompt } from "../prompt/Prompt";

export type DvachPost = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  author: string | null;
  content: string | null;
  neuralNetResponses?: Array<NeuralNetResponse>;
  timestamp: Date | null;
  prompts?: Array<Prompt>;
};
