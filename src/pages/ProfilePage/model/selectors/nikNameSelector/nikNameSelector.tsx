import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const niknameSelector = (state:StoreSchema) => state.profile?.data.editedProfile.nikname ?? ""