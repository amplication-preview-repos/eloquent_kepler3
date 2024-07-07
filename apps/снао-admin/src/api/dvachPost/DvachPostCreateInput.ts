import { NeuralNetResponseCreateNestedManyWithoutDvachPostsInput } from "./NeuralNetResponseCreateNestedManyWithoutDvachPostsInput";
import { PromptCreateNestedManyWithoutDvachPostsInput } from "./PromptCreateNestedManyWithoutDvachPostsInput";

export type DvachPostCreateInput = {
  author?: string | null;
  content?: string | null;
  neuralNetResponses?: NeuralNetResponseCreateNestedManyWithoutDvachPostsInput;
  timestamp?: Date | null;
  prompts?: PromptCreateNestedManyWithoutDvachPostsInput;
};
