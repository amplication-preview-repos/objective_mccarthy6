import { CardCreateNestedManyWithoutTemplatesInput } from "./CardCreateNestedManyWithoutTemplatesInput";
import { InputJsonValue } from "../../types";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type TemplateCreateInput = {
  cards?: CardCreateNestedManyWithoutTemplatesInput;
  description?: string | null;
  design?: InputJsonValue;
  store?: StoreWhereUniqueInput | null;
  title?: string | null;
};
