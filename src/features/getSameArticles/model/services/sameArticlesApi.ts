import { rtkApi } from "shared/api/rtk"

const recomendations = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getSameArticles: build.query({
			query: () => "articles/theSame/2",
		}),
	}),
	overrideExisting: false,
})

export const { useGetSameArticlesQuery } = recomendations
