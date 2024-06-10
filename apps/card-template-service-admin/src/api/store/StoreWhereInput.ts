import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StaffListRelationFilter } from "../staff/StaffListRelationFilter";
import { TemplateListRelationFilter } from "../template/TemplateListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StoreWhereInput = {
  address?: StringNullableFilter;
  contactInformation?: StringNullableFilter;
  id?: StringFilter;
  staffItems?: StaffListRelationFilter;
  templates?: TemplateListRelationFilter;
  user?: UserWhereUniqueInput;
};
