import { CounterSchema } from "entity/counter"
import { UserSchema } from "entity/user"
import { LoginSchema } from "features/login"

export interface StoreSchema {
	counter: CounterSchema
	login: LoginSchema
	user: UserSchema
}