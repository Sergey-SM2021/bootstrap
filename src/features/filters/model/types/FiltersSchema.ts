export enum SortBy {
    "Views" = "Views",
    "Date" = "Date",
    "Title" = "Title",
}

export enum StrategyType {
    "asc" = "asc",
    "desc" = "desc",
}

export interface FilterSchema {
    sortBy?: SortBy
    search?: string
    strategy?: StrategyType
    tegs?: string[]
    page: number
}