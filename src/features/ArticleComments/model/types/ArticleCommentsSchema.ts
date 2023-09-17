import { EntityState } from "@reduxjs/toolkit"
import { CommentType } from "entity/Comment"

export interface ArticleCommentsSchema {
  comments: EntityState<CommentType>
  isLoading: boolean;
  error?: string
  newCommentText?: string
}
