import { CardUpdateManyWithoutTemplatesInput } from "./CardUpdateManyWithoutTemplatesInput";
import { InputJsonValue } from "../../types";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type TemplateUpdateInput = {
  cards?: CardUpdateManyWithoutTemplatesInput;
  description?: string | null;
  design?: InputJsonValue;
  store?: StoreWhereUniqueInput | null;
  title?: string | null;
};
