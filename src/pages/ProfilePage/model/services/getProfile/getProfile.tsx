import { createAsyncThunk } from "@reduxjs/toolkit"
import { $api } from "shared/api/api"
import { ProfileSchema } from "../../types/ProfileSchema"

export const getProfile = createAsyncThunk<
  ProfileSchema["data"],
  number,
  { extra: { api: typeof $api } }
>("Profile/GetProfile", async (id, { extra: { api }, rejectWithValue }) => {
	try {
		const profile = await api.get(`user/${id}`)
		return profile.data
	} catch (error) {
		return rejectWithValue("can't get profile")
	}
})
