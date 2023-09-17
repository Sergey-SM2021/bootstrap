import { Role } from "entity/user"

export interface loginParams {
  login: string;
  password: string;
}

export interface loginResponce {
  id: string;
  avatar?: string;
  role: Role
  token: string;
}
