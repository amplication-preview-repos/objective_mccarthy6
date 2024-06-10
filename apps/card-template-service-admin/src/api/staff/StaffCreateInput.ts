import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type StaffCreateInput = {
  email?: string | null;
  name?: string | null;
  store?: StoreWhereUniqueInput | null;
};
