import axios from "axios"
import { USER_LOCALSTORAGE_NAME } from "shared/const/localstorage"

export const $api = axios.create({
	baseURL: __API__,
})

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage
		.getItem(USER_LOCALSTORAGE_NAME)
		?.slice(1, -1)}`
	return config
})
