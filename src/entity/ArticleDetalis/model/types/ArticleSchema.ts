import { Article } from "./Article"

export interface ArticleSchema {
    error?: string
    data?: Article
    isLoading: boolean
}