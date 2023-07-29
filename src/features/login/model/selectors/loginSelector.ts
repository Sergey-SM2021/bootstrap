import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const LoginFormLoginSelector = (state:StoreSchema) => state.login?.login ?? ""
export const LoginFormPasswordSelector = (state:StoreSchema) => state.login?.password ?? ""
export const LoginFormIsLoadingSelector = (state:StoreSchema) => state.login?.isLoading
export const LoginFormErrorSelector = (state:StoreSchema) => state.login?.error
