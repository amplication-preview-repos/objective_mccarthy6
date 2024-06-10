import { Staff } from "../staff/Staff";
import { Template } from "../template/Template";
import { User } from "../user/User";

export type Store = {
  address: string | null;
  contactInformation: string | null;
  createdAt: Date;
  id: string;
  staffItems?: Array<Staff>;
  templates?: Array<Template>;
  updatedAt: Date;
  user?: User | null;
};
