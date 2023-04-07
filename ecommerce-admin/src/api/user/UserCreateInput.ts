import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  lastName?: string | null;
  nick?: string | null;
  password: string;
  Proczkowski?: string | null;
  roles: InputJsonValue;
  username: string;
};
