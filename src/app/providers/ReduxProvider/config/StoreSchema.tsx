import { CounterSchema } from "entity/counter"
import { ProfileSchema } from "pages/ProfilePage/model/types/ProfileSchema"
import { UserSchema } from "entity/user"
import { LoginSchema } from "features/login"
import { $api } from "shared/api/api"
import { ArticlePageSchema } from "pages/ArticlesPage/model/types/articleSchema"
import { SaveScrollSchema } from "features/SaveScroll"
import { TagSchema } from "entity/Tag/model/type/TagSchema"
import { ArticleCommentsSchema } from "features/ArticleComments/model/types/ArticleCommentsSchema"
import { ArticleSchema } from "entity/ArticleDetalis"
import { sameArticlesApi } from "features/getSameArticles/model/services/sameArticlesApi"

export interface StoreSchema {
  counter: CounterSchema;
  tags: TagSchema;
  scroll: SaveScrollSchema;
  user: UserSchema;
  [sameArticlesApi.reducerPath]: ReturnType<typeof sameArticlesApi.reducer>;
  login?: LoginSchema;
  profile?: ProfileSchema;
  ArticleReducer?: ArticleSchema;
  ArticlesPageReducer?: ArticlePageSchema;
  articleComments?: ArticleCommentsSchema;
  sameArticles?: ArticleCommentsSchema;
}

export interface thunkExtra {
  api: typeof $api;
}
