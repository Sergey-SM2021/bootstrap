import { createAsyncThunk } from "@reduxjs/toolkit"
import { $api } from "shared/api/api"
import { ProfileSchema } from "../types/ProfileSchema"

export const getProfile = createAsyncThunk<
  ProfileSchema["data"],
  number,
  { extra: { api: typeof $api } }
>("Profile/GetProfile", async (id, { extra: { api } }) => {
	const profile = await api.get(`profile?id=${id}`)
	return profile.data
})
