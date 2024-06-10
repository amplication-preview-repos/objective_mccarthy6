import { Card } from "../card/Card";
import { JsonValue } from "type-fest";
import { Store } from "../store/Store";

export type Template = {
  cards?: Array<Card>;
  createdAt: Date;
  description: string | null;
  design: JsonValue;
  id: string;
  store?: Store | null;
  title: string | null;
  updatedAt: Date;
};
