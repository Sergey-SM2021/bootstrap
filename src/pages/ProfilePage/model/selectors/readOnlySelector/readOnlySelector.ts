import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const readOnlySelector = (state:StoreSchema) => state.profile?.readOnly ?? false