import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { SortBy, StrategyType } from "../types/articleSchema"

export const getView = (state: StoreSchema) =>
	state.ArticlesPageReducer?.view || "small"

export const getIsLoading = (state: StoreSchema) =>
	state.ArticlesPageReducer?.isLoading ?? true

export const getSearch = (state: StoreSchema) =>
	state.ArticlesPageReducer?.search ?? ""

export const getSortBy = (state: StoreSchema) =>
	state.ArticlesPageReducer?.sortBy ?? SortBy.Date

export const getStrategy = (state: StoreSchema) =>
	state.ArticlesPageReducer?.strategy ?? StrategyType.asc

export const getPage = (state: StoreSchema) => state.ArticlesPageReducer?.page || 1

export const getHasMore = (state: StoreSchema) => state.ArticlesPageReducer?.hasMore ?? true

export const getTags = (state: StoreSchema) => state.ArticlesPageReducer?.tags ?? []
