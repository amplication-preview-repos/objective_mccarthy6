import { CardUpdateManyWithoutUsersInput } from "./CardUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StoreUpdateManyWithoutUsersInput } from "./StoreUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  cards?: CardUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  stores?: StoreUpdateManyWithoutUsersInput;
  username?: string;
  userType?: "Option1" | null;
};
