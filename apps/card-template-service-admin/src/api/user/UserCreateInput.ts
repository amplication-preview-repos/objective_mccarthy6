import { CardCreateNestedManyWithoutUsersInput } from "./CardCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StoreCreateNestedManyWithoutUsersInput } from "./StoreCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  cards?: CardCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  stores?: StoreCreateNestedManyWithoutUsersInput;
  username: string;
  userType?: "Option1" | null;
};
