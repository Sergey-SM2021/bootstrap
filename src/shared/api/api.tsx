import axios from "axios"
import { USER_LOCALSTORAGE_NAME } from "shared/const/localstorage"

export const $api = axios.create({
	baseURL: __API__,
})

const getToken = () => {
	const lsItem = localStorage.getItem(USER_LOCALSTORAGE_NAME)
	if (lsItem) {
		return JSON.parse(lsItem)["token"]
	}
}

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${getToken()}`
	return config
})
