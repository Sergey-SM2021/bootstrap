import { CounterSchema } from "entity/counter"
import { ProfileSchema } from "pages/ProfilePage/model/types/ProfileSchema"
import { UserSchema } from "entity/user"
import { LoginSchema } from "features/login"
import { $api } from "shared/api/api"
import { ArticleSchema } from "entity/Article"
import { ArticleDetalisCommentsSchema } from "pages/ArticleDetalisPage/model/types/ArticleDetalisPage"
import { CreateCommentSchema } from "features/createComment/model/types/createCommentSchema"
import { ArticlePageSchema } from "pages/ArticlesPage/model/types/articleSchema"
import { SaveScrollSchema } from "features/SaveScroll"

export interface StoreSchema {
  counter: CounterSchema;
  login?: LoginSchema;
  user: UserSchema;
  profile?: ProfileSchema;
  ArticleReducer?: ArticleSchema;
  ArticlesPageReducer?: ArticlePageSchema;
  comments?: ArticleDetalisCommentsSchema;
  createComment?: CreateCommentSchema;
  scroll: SaveScrollSchema;
}

export interface thunkExtra {
  api: typeof $api;
}
