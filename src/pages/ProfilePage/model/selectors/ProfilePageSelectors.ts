import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const selectProfile = (state: StoreSchema) =>
	state.profile?.profile ?? {}

export const selectError = (state: StoreSchema) => state.profile?.error ?? ""
export const selectIsLoading = (state: StoreSchema) => state.profile?.isLoading
export const selectReadOnly = (state: StoreSchema) =>
	state.profile?.readOnly ?? true
export const selectProfileValidateErrors = (state: StoreSchema) =>
	state.profile?.profileValidateErrors
export const selectEditedProfile = (state: StoreSchema) =>
	state.profile?.editedProfile
