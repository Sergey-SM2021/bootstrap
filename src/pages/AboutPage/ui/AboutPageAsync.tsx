import { lazy } from "react"

export const AboutPage = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => {
				// @ts-ignore
				resolve(import("./AboutPage"))
			}, 1500)
		})
)
