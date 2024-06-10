import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CardCreateInput = {
  creationDate?: Date | null;
  status?: "Option1" | null;
  template?: TemplateWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
