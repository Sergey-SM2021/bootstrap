import { CounterSchema } from "entity/counter"
import { ProfileSchema } from "entity/profile/model/types/ProfileSchema"
import { UserSchema } from "entity/user"
import { LoginSchema } from "features/login"
import { $api } from "shared/api/api"

export interface StoreSchema {
  counter: CounterSchema
  login?: LoginSchema
  user: UserSchema
  profile?: ProfileSchema
}

export interface thunkExtra {
  api: typeof $api;
}
