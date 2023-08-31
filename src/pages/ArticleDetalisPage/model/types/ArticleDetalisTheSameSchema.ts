import { EntityState } from "@reduxjs/toolkit"
import { Article } from "entity/Article/model/types/Article"

export interface ArticleDetalisPageTheSame extends EntityState<Article> {
  isLoading: boolean;
  error?: string
}
