import { EntityState } from "@reduxjs/toolkit/src/entities/models"
import { ArticleType } from "entity/ArticleDetalis"

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
  articles: EntityState<ArticleType>;

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
