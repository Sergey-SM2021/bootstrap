import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const AvatarSelector = (state:StoreSchema) => state.profile?.data.editedProfile.avatar ?? ""