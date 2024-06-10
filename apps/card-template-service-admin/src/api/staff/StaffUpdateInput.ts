import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type StaffUpdateInput = {
  email?: string | null;
  name?: string | null;
  store?: StoreWhereUniqueInput | null;
};
