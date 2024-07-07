import { DvachPostWhereUniqueInput } from "../dvachPost/DvachPostWhereUniqueInput";

export type PromptUpdateInput = {
  content?: string | null;
  timestamp?: Date | null;
  dvachPost?: DvachPostWhereUniqueInput | null;
};
