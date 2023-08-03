import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

export const validationErrorSelector = (state:StoreSchema) => state.profile?.profileValidateErrors ?? []