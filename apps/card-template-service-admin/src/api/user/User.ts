import { Card } from "../card/Card";
import { JsonValue } from "type-fest";
import { Store } from "../store/Store";

export type User = {
  cards?: Array<Card>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  stores?: Array<Store>;
  updatedAt: Date;
  username: string;
  userType?: "Option1" | null;
};
