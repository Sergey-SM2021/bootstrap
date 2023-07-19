import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { setUser } from "entity/user"
import { USER_LOCALSTORAGE_NAME } from "shared/const/localstorage"

export const login_action = createAsyncThunk<
  {
    login: string;
    password: string;
    id: number;
  },
  {
    login: string;
    password: string;
  },
  { rejectValue: string }
>("login/login", async ({ login, password }, thankAPI) => {
	try {
		const response = await (await axios.post("http://localhost:3000/login", { login, password })).data
		localStorage.setItem(USER_LOCALSTORAGE_NAME, JSON.stringify(response))
		thankAPI.dispatch(setUser(response))
		return response
	} catch (error) {
		return thankAPI.rejectWithValue("error")
	}
})
