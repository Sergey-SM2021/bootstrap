import { createAsyncThunk } from "@reduxjs/toolkit"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { $api } from "shared/api/api"
import { EditProfileSelector } from "../../selectors/EditProfileSelector/EditProfileSelector"
import { validateProfile } from "../validateProfile/validateProfile"
import { Profile, ProfileErrors } from "../../types/ProfileSchema"
import { toggleReadOnly } from "../../slice/profileSlice/profileSlice"

type ReturnedType = any;

export const updateProfile = createAsyncThunk<
  ReturnedType,
  void,
  { extra: { api: typeof $api }; state: StoreSchema; rejectValue: ProfileErrors[] }
>(
	"profile/update",
	async (params, { extra: { api }, rejectWithValue, getState, dispatch }) => {
		const profile = EditProfileSelector(getState())
		const errors = validateProfile(profile as Profile)
		if (errors.length) {
			return rejectWithValue(errors)
		}
		try {
			const response = await api.put("user/3", profile)
			dispatch(toggleReadOnly())
			return response
		} catch (error) {
			return rejectWithValue([...errors, ProfileErrors.ServerError])
		}
	}
)
