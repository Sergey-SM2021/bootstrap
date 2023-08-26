enum SortBy {
    "Views" = "Views",
    "Date" = "Date",
    "Title" = "Title",
}

enum StrategyType {
    "asc" = "asc",
    "desc" = "desc",
}

export interface FilterSchema {
    sortBy?: SortBy
    search?: string[]
    strategy?: StrategyType
    tegs?: string[]
}