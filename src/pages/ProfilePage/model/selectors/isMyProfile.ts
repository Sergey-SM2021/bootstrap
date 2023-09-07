import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { getUserId } from "entity/user/model/selector/getUserSelector"

export const isMyProfile = (profileId?: string) => (state: StoreSchema) =>
	getUserId(state) === profileId
