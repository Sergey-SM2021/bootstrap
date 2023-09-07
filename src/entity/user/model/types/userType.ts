import { Role } from "../const/user"

export interface UserSchema {
  data?: {
    id: string,
    avatar?: string,
    role: Role,
    token: string
  };
  _inited: boolean;
}
