import { CardListRelationFilter } from "../card/CardListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StoreListRelationFilter } from "../store/StoreListRelationFilter";

export type UserWhereInput = {
  cards?: CardListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  stores?: StoreListRelationFilter;
  username?: StringFilter;
  userType?: "Option1";
};
