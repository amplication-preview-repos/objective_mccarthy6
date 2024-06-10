import { StaffUpdateManyWithoutStoresInput } from "./StaffUpdateManyWithoutStoresInput";
import { TemplateUpdateManyWithoutStoresInput } from "./TemplateUpdateManyWithoutStoresInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StoreUpdateInput = {
  address?: string | null;
  contactInformation?: string | null;
  staffItems?: StaffUpdateManyWithoutStoresInput;
  templates?: TemplateUpdateManyWithoutStoresInput;
  user?: UserWhereUniqueInput | null;
};
