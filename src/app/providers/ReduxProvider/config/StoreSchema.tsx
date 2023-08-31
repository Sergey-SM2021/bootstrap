import { CounterSchema } from "entity/counter"
import { ProfileSchema } from "pages/ProfilePage/model/types/ProfileSchema"
import { UserSchema } from "entity/user"
import { LoginSchema } from "features/login"
import { $api } from "shared/api/api"
import { ArticleSchema } from "entity/Article"
import { CreateCommentSchema } from "features/createComment/model/types/createCommentSchema"
import { ArticlePageSchema } from "pages/ArticlesPage/model/types/articleSchema"
import { SaveScrollSchema } from "features/SaveScroll"
import { FilterSchema } from "features/filters/model/types/FiltersSchema"
import { TagSchema } from "entity/Tag/model/type/TagSchema"
import { ArticleDetalisPageSchema } from "pages/ArticleDetalisPage/model/types/ArticleDetalisPageSchema"

export interface StoreSchema {
  counter: CounterSchema;
  login?: LoginSchema;
  user: UserSchema;
  profile?: ProfileSchema;
  ArticleReducer?: ArticleSchema;
  ArticlesPageReducer?: ArticlePageSchema;
  comments?: ArticleDetalisPageSchema;
  createComment?: CreateCommentSchema;
  scroll: SaveScrollSchema;
  filter?: FilterSchema;
  tags: TagSchema;
}

export interface thunkExtra {
  api: typeof $api;
}
