import { Store as TStore } from "../api/store/Store";

export const STORE_TITLE_FIELD = "address";

export const StoreTitle = (record: TStore): string => {
  return record.address?.toString() || String(record.id);
};
