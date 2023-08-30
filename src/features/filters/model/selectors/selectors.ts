import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { SortBy, StrategyType } from "../types/FiltersSchema"

export const getSearch = (state: StoreSchema) => state.filter?.search ?? ""
export const getSortBy = (state: StoreSchema) =>
	state.filter?.sortBy ?? SortBy.Date
export const getStrategy = (state: StoreSchema) =>
	state.filter?.strategy ?? StrategyType.asc
export const getPage = (state: StoreSchema) => state.filter?.page || 1
export const getHasMore = (state: StoreSchema) => state.filter?.hasMore ?? true
export const getTags = (state: StoreSchema) => state.filter?.tags ?? []
