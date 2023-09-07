import { Role } from "entity/user/model/const/user"

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
