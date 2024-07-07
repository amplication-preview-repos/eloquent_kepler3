import { DvachPostWhereUniqueInput } from "../dvachPost/DvachPostWhereUniqueInput";

export type PromptCreateInput = {
  content?: string | null;
  timestamp?: Date | null;
  dvachPost?: DvachPostWhereUniqueInput | null;
};
