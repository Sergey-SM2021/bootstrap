import { createAsyncThunk } from "@reduxjs/toolkit"
import { $api } from "shared/api/api"
import { ProfileSchema } from "../../types/ProfileSchema"
import { AxiosError } from "axios"

export const getProfile = createAsyncThunk<
  ProfileSchema["data"],
  number,
  { extra: { api: typeof $api } }
>("Profile/GetProfile", async (id, { extra: { api }, rejectWithValue }) => {
	try {
		const profile = await api.get(`profile?id=${id}`)
		return profile.data
	} catch (error) {
		if (error instanceof AxiosError) {
			return rejectWithValue(error.message)
		}
		return rejectWithValue(error)
	}
})
