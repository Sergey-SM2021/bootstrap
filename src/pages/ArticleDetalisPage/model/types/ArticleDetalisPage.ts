import {EntityState} from "@reduxjs/toolkit/src/entities/models"
import {Comment} from "entity/Comment/model/types/Comment"

export interface ArticleDetalisCommentsSchema extends  EntityState<Comment> {
    Error?: string
    isLoading: boolean
}
