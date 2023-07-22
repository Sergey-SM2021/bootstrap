import { CounterSchema } from "entity/counter"
import { ProfileSchema } from "entity/profile/model/types/ProfileSchema"
import { UserSchema } from "entity/user"
import { LoginSchema } from "features/login"

export interface StoreSchema {
  counter: CounterSchema;
  login?: LoginSchema;
  user: UserSchema;
  profile?: ProfileSchema;
}
