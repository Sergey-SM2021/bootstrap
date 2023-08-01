import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const nameSelector = (state: StoreSchema) => state.profile?.data.editedProfile.name ?? ""
