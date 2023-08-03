import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const ageSelector = (state:StoreSchema) => state.profile?.data.editedProfile.age ?? 1