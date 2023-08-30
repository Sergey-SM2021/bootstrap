export enum SortBy {
  "Views" = "views",
  "Date" = "createdAt",
  "Likes" = "likes",
}

export enum StrategyType {
  "asc" = "ASC",
  "desc" = "DESC",
}

export interface FilterSchema {
  sortBy?: SortBy;
  search?: string;
  strategy?: StrategyType;
  tags?: number[];
  page: number;
  hasMore?: boolean;
}
