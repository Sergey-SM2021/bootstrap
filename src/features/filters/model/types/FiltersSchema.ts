export enum SortBy {
    "Views" = "views",
    "Date" = "createdAt",
    "Title" = "title",
}

export enum StrategyType {
    "asc" = "ASC",
    "desc" = "DESC",
}

export interface FilterSchema {
    sortBy?: SortBy
    search?: string
    strategy?: StrategyType
    tegs?: string[]
    page: number
    hasMore?: boolean
}