import { DvachPostWhereUniqueInput } from "../dvachPost/DvachPostWhereUniqueInput";

export type NeuralNetResponseUpdateInput = {
  timestamp?: Date | null;
  content?: string | null;
  dvachPost?: DvachPostWhereUniqueInput | null;
};
