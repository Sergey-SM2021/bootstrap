import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const getTextSelector = (store: StoreSchema) =>
	store.createComment?.text
