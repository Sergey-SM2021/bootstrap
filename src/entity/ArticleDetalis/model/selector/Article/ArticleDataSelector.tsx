import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { bindSelector } from "shared/lib/store/bindSelector/bindSelector"

export const [getArticleDetalisData] = bindSelector(
	(state: StoreSchema) => state.ArticleReducer?.data
)

export const [getArticleDetalisIsLoading] = bindSelector(
	(state: StoreSchema) => state.ArticleReducer?.isLoading ?? true
)

export const [getArticleDetalisError] = bindSelector(
	(state: StoreSchema) => state.ArticleReducer?.error
)
