import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const getView = (state: StoreSchema) =>
	state.ArticlesPageReducer?.view || "small"