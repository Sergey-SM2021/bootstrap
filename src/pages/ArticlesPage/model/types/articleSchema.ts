import { EntityState } from "@reduxjs/toolkit/src/entities/models"
import { Article } from "entity/Article/model/types/Article"

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;
  view: "small" | "big";
}
