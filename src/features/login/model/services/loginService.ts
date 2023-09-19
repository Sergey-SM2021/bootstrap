import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkExtra } from "app/providers/ReduxProvider/config/StoreSchema"
import { actions } from "entity/user"
import { USER_LOCALSTORAGE_NAME } from "shared/const/localstorage"
import { loginParams, loginResponce } from "../types/loginTypes"

export const login_action = createAsyncThunk<
loginResponce,
loginParams,
  { rejectValue: string; extra: thunkExtra }
>("login/login", async ({ login, password }, thankAPI) => {
	try {
		const user = (
			await thankAPI.extra.api.post<loginResponce>("auth/login", { login, password })
		).data
		localStorage.setItem(USER_LOCALSTORAGE_NAME, JSON.stringify(user))
		thankAPI.dispatch(actions.setUser(user))
		return user
	} catch (error) {
		return thankAPI.rejectWithValue("error")
	}
})
