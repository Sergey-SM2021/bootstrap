import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const lastnameSelector = (state: StoreSchema) =>
	state.profile?.data?.lastname ?? ""
