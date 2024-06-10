import { Store } from "../store/Store";

export type Staff = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  store?: Store | null;
  updatedAt: Date;
};
