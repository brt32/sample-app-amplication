import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  id: string;
  lastName: string | null;
  nick: string | null;
  Proczkowski: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
