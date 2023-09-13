import { ComponentRender } from "shared/config/test"
import { RouterProvider } from "./RouterProvider"
import { render, waitFor } from "@testing-library/react"

describe("router tests", () => {
	it("render home page", async () => {
		const { getByTestId } = render(
			<ComponentRender route="/">
				<RouterProvider />
			</ComponentRender>
		)

		await waitFor(() => getByTestId("title"))

		expect(getByTestId("title")).toBeInTheDocument()
	})
})
