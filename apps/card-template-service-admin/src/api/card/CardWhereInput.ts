import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CardWhereInput = {
  creationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  template?: TemplateWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
