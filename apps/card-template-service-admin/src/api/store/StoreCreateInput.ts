import { StaffCreateNestedManyWithoutStoresInput } from "./StaffCreateNestedManyWithoutStoresInput";
import { TemplateCreateNestedManyWithoutStoresInput } from "./TemplateCreateNestedManyWithoutStoresInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StoreCreateInput = {
  address?: string | null;
  contactInformation?: string | null;
  staffItems?: StaffCreateNestedManyWithoutStoresInput;
  templates?: TemplateCreateNestedManyWithoutStoresInput;
  user?: UserWhereUniqueInput | null;
};
