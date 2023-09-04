import { EntityState } from "@reduxjs/toolkit/src/entities/models"
import { Article } from "entity/Article/model/types/Article"

export enum SortBy {
  "Views" = "views",
  "Date" = "createdAt",
  "Likes" = "likes",
}

export enum StrategyType {
  "asc" = "ASC",
  "desc" = "DESC",
}

export interface ArticlePageSchema {
  articles: EntityState<Article>;

  isLoading: boolean;
  error?: string;
  
  view: "small" | "big";
  sortBy?: SortBy;
  search?: string;
  strategy?: StrategyType;
  tags?: number[];
  page: number;
  hasMore?: boolean;
}
