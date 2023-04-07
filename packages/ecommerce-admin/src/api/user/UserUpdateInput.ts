import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  lastName?: string | null;
  nick?: string | null;
  password?: string;
  Proczkowski?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
