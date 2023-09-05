import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { USER_LOCALSTORAGE_NAME } from "shared/const/localstorage"

export const rtkApi = createApi({
	reducerPath: "rtkApi",
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
		prepareHeaders: (headers) => {
			const Token = `Bearer ${localStorage
				.getItem(USER_LOCALSTORAGE_NAME)
				?.slice(1, -1)}`
			if (Token) {
				headers.set("Authorization", Token)
			}
			return headers
		},
	}),
	endpoints: () => ({}),
})
