import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { Citys } from "entity/City/model/types/CitySchema"

export const citySelector = (state:StoreSchema) => state.profile?.data?.editedProfile.city ?? Citys.Moscow