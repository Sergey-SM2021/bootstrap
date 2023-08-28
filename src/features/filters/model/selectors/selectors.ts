import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { SortBy, StrategyType } from "../types/FiltersSchema"

export const getSearch = (state: StoreSchema) => state.filter?.search ?? ""
export const getSortBy = (state: StoreSchema) => state.filter?.sortBy ?? SortBy.Title
export const getStrategy = (state: StoreSchema) => state.filter?.strategy ?? StrategyType.asc
export const getTegs = (state: StoreSchema) => state.filter?.tegs ?? []
export const getPage = (state: StoreSchema) => state.filter?.page || 1