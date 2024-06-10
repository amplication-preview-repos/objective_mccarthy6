import { CardListRelationFilter } from "../card/CardListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type TemplateWhereInput = {
  cards?: CardListRelationFilter;
  description?: StringNullableFilter;
  design?: JsonFilter;
  id?: StringFilter;
  store?: StoreWhereUniqueInput;
  title?: StringNullableFilter;
};
