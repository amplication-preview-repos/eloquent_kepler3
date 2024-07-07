import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { NeuralNetResponseListRelationFilter } from "../neuralNetResponse/NeuralNetResponseListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PromptListRelationFilter } from "../prompt/PromptListRelationFilter";

export type DvachPostWhereInput = {
  id?: StringFilter;
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  neuralNetResponses?: NeuralNetResponseListRelationFilter;
  timestamp?: DateTimeNullableFilter;
  prompts?: PromptListRelationFilter;
};
