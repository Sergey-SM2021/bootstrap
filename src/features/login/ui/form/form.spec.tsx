import { render, waitFor } from "@testing-library/react"
import Form from "./Form"
import { ComponentRender } from "shared/config/test"
import userEvent from "@testing-library/user-event"
import { $api } from "shared/api/api"

describe("login tests", () => {
	it("type login", () => {
		const handlerSuccess = jest.fn()
		const { getByTestId } = render(
			<ComponentRender route="/">
				<Form onSuccess={handlerSuccess} />
			</ComponentRender>
		)

		userEvent.type(getByTestId("login"), "MyEmail")

		expect((getByTestId("login") as HTMLInputElement).value).toBe("MyEmail")
	})

	it("type password", () => {
		const handlerSuccess = jest.fn()
		const { getByTestId } = render(
			<ComponentRender route="/">
				<Form onSuccess={handlerSuccess} />
			</ComponentRender>
		)

		userEvent.type(getByTestId("password"), "MyPassword")

		expect((getByTestId("password") as HTMLInputElement).value).toBe(
			"MyPassword"
		)
	})

	it("type success work pruperly", async () => {
		jest
			.spyOn($api, "post")
			.mockReturnValue(
				Promise.resolve({
					data: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
				})
			)

		const handlerSuccess = jest.fn(() => {
			console.log("all right")
		})

		const { getByTestId } = render(
			<ComponentRender route="/">
				<Form onSuccess={handlerSuccess} />
			</ComponentRender>
		)

		userEvent.type(getByTestId("login"), "MyEmail")

		userEvent.type(getByTestId("password"), "MyPassword")

		userEvent.click(getByTestId("signin"))

		await waitFor(() => expect(handlerSuccess).toHaveBeenCalled())
	})
})
