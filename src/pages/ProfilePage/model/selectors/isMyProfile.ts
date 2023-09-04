import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const isMyProfile = (profileId?: string) => (state: StoreSchema) =>
	state.user.authData?.id === profileId
