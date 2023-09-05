import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const sameArticlesApi = createApi({
	reducerPath: "sameArticlesApi",
	baseQuery: fetchBaseQuery({ baseUrl: __API__ }),
	endpoints: (builder) => ({
		getSameArticles: builder.query({
			query: (name) => "articles/theSame/2",
		}),
	}),
})

export const { useGetSameArticlesQuery } = sameArticlesApi
