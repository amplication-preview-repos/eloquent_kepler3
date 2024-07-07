import { SortOrder } from "../../util/SortOrder";

export type PromptOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  timestamp?: SortOrder;
  dvachPostId?: SortOrder;
};
