import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { City } from "shared/const/common"

export const citySelector = (state:StoreSchema) => state.profile?.data?.editedProfile.city ?? City.Moscow