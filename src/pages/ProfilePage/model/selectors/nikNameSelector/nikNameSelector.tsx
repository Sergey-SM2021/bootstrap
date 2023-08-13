import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const nicknameSelector = (state:StoreSchema) => state.profile?.data.editedProfile.nickname ?? ""