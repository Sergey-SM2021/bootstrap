import userEvent from "@testing-library/user-event"
import { render } from "@testing-library/react"
import Form from "./Form"
import { ComponentRender } from "shared/config/test"
import { act } from "react-dom/test-utils"
import axios from "axios"

jest.mock("axios")

const mockedAxios = jest.mocked(axios)

describe("login form", () => {
	it("login form", async () => {
		// const handlerClose = jest.fn()
		// mockedAxios.post.mockReturnValue(new Promise((resolve)=>{resolve({data:"token"})}))

		// const { getByTestId } = render(
		// 	<ComponentRender
		// 		route="/"
		// 		initialStore={{
		// 			login: {
		// 				isLoading: false,
		// 				login: "",
		// 				password: "",
		// 				error: ""
		// 			},
		// 		}}
		// 	>
		// 		<Form onSuccess={handlerClose} />
		// 	</ComponentRender>
		// )

		// expect((getByTestId("login") as HTMLInputElement).value).toBe("")
		// expect((getByTestId("password") as HTMLInputElement).value).toBe("")

		// act(() => userEvent.type(getByTestId("login"), "sergey2003.k.96@gmail.com"))
		// act(() => userEvent.type(getByTestId("password"), "sergey2003"))

		// expect((getByTestId("login") as HTMLInputElement).value).toBe(
		// 	"sergey2003.k.96@gmail.com"
		// )
		// expect((getByTestId("password") as HTMLInputElement).value).toBe(
		// 	"sergey2003"
		// )

		// userEvent.click(getByTestId("signin"))
		// expect(handlerClose).toBeCalledTimes(1)
	})
})
