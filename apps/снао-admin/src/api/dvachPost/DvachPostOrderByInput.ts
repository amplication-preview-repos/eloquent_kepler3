import { SortOrder } from "../../util/SortOrder";

export type DvachPostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  author?: SortOrder;
  content?: SortOrder;
  timestamp?: SortOrder;
};
