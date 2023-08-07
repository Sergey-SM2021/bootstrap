import { ArticlePageSchema } from "../types/ArticlePageSchema"
import { ArticlePageSliceActions, ArticlePageSliceReducer } from "./ArticlePageSlice"

describe("ArticlePage slice test", () => {
	test("increment reducer increment work properly", () => {
		const state: ArticlePageSchema = { value: 666 }
		expect(ArticlePageSliceReducer(state, ArticlePageSliceActions.increment)).toEqual({
			value: 667,
		})
	})
})
