import { ProfileSchema } from "pages/ProfilePage"
import { UserSchema } from "entity/user"
import { LoginSchema } from "features/login"
import { $api } from "shared/api/api"
import { ArticlePageSchema } from "pages/ArticlesPage"
import { SaveScrollSchema } from "features/SaveScroll"
import { TagSchema } from "entity/Tag"
import { ArticleCommentsSchema } from "features/ArticleComments"
import { ArticleSchema } from "entity/ArticleDetalis"
import { rtkApi } from "shared/api/rtk"

export interface StoreSchema {
  tags: TagSchema;
  scroll: SaveScrollSchema;
  user: UserSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
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
