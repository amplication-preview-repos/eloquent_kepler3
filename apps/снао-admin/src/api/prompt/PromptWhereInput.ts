import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DvachPostWhereUniqueInput } from "../dvachPost/DvachPostWhereUniqueInput";

export type PromptWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  dvachPost?: DvachPostWhereUniqueInput;
};
