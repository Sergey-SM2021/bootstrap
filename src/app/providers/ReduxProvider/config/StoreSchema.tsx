import { CounterSchema } from "entity/counter"
import { ProfileSchema } from "pages/ProfilePage/model/types/ProfileSchema"
import { UserSchema } from "entity/user"
import { LoginSchema } from "features/login"
import { $api } from "shared/api/api"
import { ArticleSchema } from "entity/Article"
import {ArticleDetalisCommentsSchema} from "pages/ArticleDetalisPage/model/types/ArticleDetalisPage"

export interface StoreSchema {
  counter: CounterSchema
  login?: LoginSchema
  user: UserSchema
  profile?: ProfileSchema
  ArticleReducer?: ArticleSchema
  comments?: ArticleDetalisCommentsSchema
}

export interface thunkExtra {
  api: typeof $api;
}
