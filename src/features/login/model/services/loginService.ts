import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { LoginSchema } from "../types/loginSchema"

interface User {
  login: string
  password: string
  id: string
}

export const login_action = createAsyncThunk<User, LoginSchema>("login/login", async ({login, password}) => {
	return (await axios.post("localhost:3000/login", {login, password})).data
})
