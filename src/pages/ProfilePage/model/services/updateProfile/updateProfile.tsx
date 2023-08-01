import { createAsyncThunk } from "@reduxjs/toolkit"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { AxiosError } from "axios"
import { $api } from "shared/api/api"
import { EditProfileSelector } from "../../selectors/EditProfileSelector/EditProfileSelector"

type ReturnedType = any;

export const updateProfile = createAsyncThunk<
  ReturnedType,
  void,
  { extra: { api: typeof $api }; state: StoreSchema; rejectValue: string }
>(
	"profile/update",
	async (params, { extra: { api }, rejectWithValue, getState }) => {
		try {
			return await api.put("profile/13", EditProfileSelector(getState()))
		} catch (error) {
			if (error instanceof AxiosError) {
				return rejectWithValue(error.message)
			}
			return rejectWithValue(JSON.stringify(error))
		}
	}
)
