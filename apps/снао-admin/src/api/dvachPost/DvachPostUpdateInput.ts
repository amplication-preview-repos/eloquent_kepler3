import { NeuralNetResponseUpdateManyWithoutDvachPostsInput } from "./NeuralNetResponseUpdateManyWithoutDvachPostsInput";
import { PromptUpdateManyWithoutDvachPostsInput } from "./PromptUpdateManyWithoutDvachPostsInput";

export type DvachPostUpdateInput = {
  author?: string | null;
  content?: string | null;
  neuralNetResponses?: NeuralNetResponseUpdateManyWithoutDvachPostsInput;
  timestamp?: Date | null;
  prompts?: PromptUpdateManyWithoutDvachPostsInput;
};
