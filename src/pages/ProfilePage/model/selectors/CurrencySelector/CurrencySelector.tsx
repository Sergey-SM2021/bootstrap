import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { Currency } from "shared/const/common"

export const currencySelector = (state: StoreSchema) => state.profile?.data.editedProfile.currancy ?? Currency.USD