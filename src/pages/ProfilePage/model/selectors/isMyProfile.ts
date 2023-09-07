import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { getUserId } from "entity/user/model/selector/getUser"

export const isMyProfile = (profileId?: number) => (state: StoreSchema) =>
	getUserId(state) == profileId
