import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const getTagsSelector = (state:StoreSchema) => state.tags?.tags ?? [] 