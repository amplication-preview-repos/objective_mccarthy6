import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type StaffWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  store?: StoreWhereUniqueInput;
};
