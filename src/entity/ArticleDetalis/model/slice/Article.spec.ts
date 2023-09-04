import { ArticleReducer } from "./Article"
import { getArticle } from "../services/getArticle/getArticle"
import { ArticleSchema } from "../types/ArticleSchema"
import { ArticleLabel } from "../types/Article"

const article = {
	id: "1",
	title: "Javascript news СВЕЖАЯ",
	subtitle: "Что нового в JS за 2022 год?",
	img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
	views: 1022,
	createdAt: "26.04.2022",
	userId: "1",
	type: ["IT"],
	label: [ArticleLabel.MEDICINE],
	user: {
		id: 8,
		nickname: "uuid",
		avatar: "link_to_avatar",
	},
	blocks: [],
}

describe("getArticle extraReducers tests", () => {
	const defaultState: ArticleSchema = {
		isLoading: false,
	}

	it("getArticle.fulfilled", () => {
		expect(
			ArticleReducer(defaultState, getArticle.fulfilled(article, "", 1))
		).toEqual({
			data: article,
			isLoading: false,
		})
	})

	it("getArticle.pending", () => {
		expect(ArticleReducer({ isLoading: false }, getArticle.pending)).toEqual({
			isLoading: true,
		})
	})

	it("getArticle.rejected", () => {
		expect(
			ArticleReducer({ isLoading: false }, getArticle.rejected(null, "", 1, "error"))
		).toEqual({
			isLoading: false,
			error: "error",
		})
	})
})
