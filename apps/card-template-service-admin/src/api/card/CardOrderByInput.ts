import { SortOrder } from "../../util/SortOrder";

export type CardOrderByInput = {
  createdAt?: SortOrder;
  creationDate?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  templateId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
