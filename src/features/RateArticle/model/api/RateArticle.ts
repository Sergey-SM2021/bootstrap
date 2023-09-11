import { rtkApi } from "shared/api/rtk"

const rateArticle = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		RateArticle: build.mutation({
			query: (body) => ({
				url: "articles/1/rate",
				method: "POST",
				body
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useRateArticleMutation } = rateArticle
