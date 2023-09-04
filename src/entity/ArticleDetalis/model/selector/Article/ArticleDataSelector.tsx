import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const getArticleDetalisData = (state:StoreSchema) => state.ArticleReducer?.data
export const getArticleDetalisIsLoading = (state:StoreSchema) => state.ArticleReducer?.isLoading ?? true
export const getArticleDetalisError = (state:StoreSchema) => state.ArticleReducer?.error