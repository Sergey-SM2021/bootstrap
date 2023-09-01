import axios from "axios"
import { CreateCommentAsync } from "./createComment"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

jest.mock("axios")

const api = jest.mocked(axios)

describe("create comment", () => {
	const comment = "opopok"
	const dispatch = jest.fn()
	const getState = jest.fn(
		() => ({ ArticleReducer: { data: { id: "78" } } } as StoreSchema)
	)

	it("create comment work properly", async () => {
		const responce = {
			id: "78",
			user: {},
			text: "Летим",
		}
		api.post.mockReturnValue(Promise.resolve({ data: responce }))
		const thunk = CreateCommentAsync(comment)
		await thunk(dispatch, getState as () => StoreSchema, { api })
		expect(dispatch).toBeCalledTimes(2)
		expect(dispatch.mock.calls[0][0].type).toBe("Create comment slice/pending")
		expect(dispatch.mock.calls[1][0].type).toBe(
			"Create comment slice/fulfilled"
		)
		expect(dispatch.mock.calls[1][0].payload).toEqual(responce)
	})

	it("create comment catch error", async () => {
		api.post.mockReturnValue(Promise.reject("Unexpected error"))
		const thunk = CreateCommentAsync(comment)
		await thunk(dispatch, getState as () => StoreSchema, { api })
		expect(dispatch).toBeCalledTimes(2)
		expect(dispatch.mock.calls[0][0].type).toBe("Create comment slice/pending")
		expect(dispatch.mock.calls[1][0].type).toBe(
			"Create comment slice/rejected"
		)
		expect(dispatch.mock.calls[1][0].payload).toBe(
			"error"
		)
	})
})
