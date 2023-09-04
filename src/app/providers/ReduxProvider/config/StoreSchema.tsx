import { CounterSchema } from "entity/counter"
import { ProfileSchema } from "pages/ProfilePage/model/types/ProfileSchema"
import { UserSchema } from "entity/user"
import { LoginSchema } from "features/login"
import { $api } from "shared/api/api"
import { ArticleSchema } from "entity/Article"
import { ArticlePageSchema } from "pages/ArticlesPage/model/types/articleSchema"
import { SaveScrollSchema } from "features/SaveScroll"
import { TagSchema } from "entity/Tag/model/type/TagSchema"
import { ArticleCommentsSchema } from "features/ArticleComments/model/types/ArticleCommentsSchema"

export interface StoreSchema {
  counter: CounterSchema;
  login?: LoginSchema;
  user: UserSchema;
  profile?: ProfileSchema;
  ArticleReducer?: ArticleSchema;
  ArticlesPageReducer?: ArticlePageSchema;
  scroll: SaveScrollSchema;
  tags: TagSchema;
  articleComments?: ArticleCommentsSchema;
}

export interface thunkExtra {
  api: typeof $api;
}
