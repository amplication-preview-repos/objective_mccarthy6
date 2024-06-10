import { Card as TCard } from "../api/card/Card";

export const CARD_TITLE_FIELD = "id";

export const CardTitle = (record: TCard): string => {
  return record.id?.toString() || String(record.id);
};
