import { EntityState } from "@reduxjs/toolkit"
import { Comment } from "entity/Comment/model/types/Comment"

export interface ArticleCommentsSchema {
  comments: EntityState<Comment>
  isLoading: boolean;
  error?: string
  newCommentText?: string
}
