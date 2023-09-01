import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const getView = (state: StoreSchema) =>
	state.ArticlesPageReducer?.view || "small"

export const getIsLoading = (state: StoreSchema) =>
	state.ArticlesPageReducer?.isLoading ?? true
