import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const EditProfileSelector = (state: StoreSchema) =>
	state.profile?.data.editedProfile
    