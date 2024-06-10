import { Template as TTemplate } from "../api/template/Template";

export const TEMPLATE_TITLE_FIELD = "title";

export const TemplateTitle = (record: TTemplate): string => {
  return record.title?.toString() || String(record.id);
};
