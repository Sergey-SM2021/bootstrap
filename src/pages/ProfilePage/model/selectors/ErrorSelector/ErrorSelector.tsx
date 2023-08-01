import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const errorSelector = (state: StoreSchema) => state.profile?.error ?? ""
