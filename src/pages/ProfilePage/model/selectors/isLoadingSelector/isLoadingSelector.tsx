import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const isLoadingSelector = (state: StoreSchema) =>
	state.profile?.isLoading ?? false
