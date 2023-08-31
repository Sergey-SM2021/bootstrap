import { ArticleDetalisCommentsSchema } from "./ArticleDetalisCommentsSchema"
import { ArticleDetalisPageTheSameSchema } from "./ArticleDetalisTheSameSchema"

export interface ArticleDetalisPageSchema {
  comments: ArticleDetalisCommentsSchema;
  same: ArticleDetalisPageTheSameSchema;
}
