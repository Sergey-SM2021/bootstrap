import { Role } from "../const/user"

export interface UserSchema {
  authData?: {
    id: string;
    avatar?: string;
    role: Role
  };
  _inited: boolean;
}
