import { lazy } from "react"

export const GetSameArticles = lazy(
	async () => import("./GetSameArticles")
)
