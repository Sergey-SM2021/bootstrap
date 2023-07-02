import { lazy } from "react"

export const MainPage = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => {
				// @ts-ignore
				resolve(import("./MainPage"))
			}, 1500)
		})
)
