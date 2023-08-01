import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { Country } from "shared/const/common"

export const countrySelector = (state: StoreSchema) => state.profile?.data.editedProfile.country ?? Country.Russia