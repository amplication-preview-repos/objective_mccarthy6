import { Template } from "../template/Template";
import { User } from "../user/User";

export type Card = {
  createdAt: Date;
  creationDate: Date | null;
  id: string;
  status?: "Option1" | null;
  template?: Template | null;
  updatedAt: Date;
  user?: User | null;
};
