import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const getView = (state: StoreSchema) =>
	state.ArticlesPageReducer?.view || "small"

export const getPage = (state: StoreSchema) =>
	state.ArticlesPageReducer?.page || 1
