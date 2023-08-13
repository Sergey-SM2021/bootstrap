import axios from "axios"
import { USER_LOCALSTORAGE_NAME } from "shared/const/localstorage"

export const $api = axios.create({
	baseURL: "http://localhost:4200/api/",
	headers: {
		Authorization: localStorage.getItem(USER_LOCALSTORAGE_NAME),
	},
})
