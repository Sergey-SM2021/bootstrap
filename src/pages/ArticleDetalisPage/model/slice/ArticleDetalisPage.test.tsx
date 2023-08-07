import { ArticleDetalisPageSchema } from "../types/ArticleDetalisPageSchema"
import { ArticleDetalisPageSliceActions, ArticleDetalisPageSliceReducer } from "./ArticleDetalisPageSlice"

describe("ArticleDetalisPage slice test", () => {
	test("increment reducer increment work properly", () => {
		const state: ArticleDetalisPageSchema = { value: 666 }
		expect(ArticleDetalisPageSliceReducer(state, ArticleDetalisPageSliceActions.increment)).toEqual({
			value: 667,
		})
	})
})
