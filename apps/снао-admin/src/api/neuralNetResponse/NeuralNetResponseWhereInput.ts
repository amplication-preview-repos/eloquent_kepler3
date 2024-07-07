import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DvachPostWhereUniqueInput } from "../dvachPost/DvachPostWhereUniqueInput";

export type NeuralNetResponseWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  content?: StringNullableFilter;
  dvachPost?: DvachPostWhereUniqueInput;
};
