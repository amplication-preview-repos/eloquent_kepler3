import { DvachPostWhereUniqueInput } from "../dvachPost/DvachPostWhereUniqueInput";

export type NeuralNetResponseCreateInput = {
  timestamp?: Date | null;
  content?: string | null;
  dvachPost?: DvachPostWhereUniqueInput | null;
};
