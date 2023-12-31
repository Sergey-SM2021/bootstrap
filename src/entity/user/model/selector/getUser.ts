import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { Role } from "../const/user"

export const getUser = (state:StoreSchema) => state.user.data

export const getUserId = (state:StoreSchema) => getUser(state)?.id
export const getUserAvatar = (state:StoreSchema) => getUser(state)?.avatar ?? ""
export const getUserRole = (state:StoreSchema) => getUser(state)?.role ?? Role.user
