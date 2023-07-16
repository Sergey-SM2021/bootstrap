import { ComponentRender } from "shared/config/test"
import { Counter } from "./Counter"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Counter test", () => {
	test("component render", () => {
		render(
			<ComponentRender route="/" initialStore={{ counter: { value: 77 } }}>
				<Counter />
			</ComponentRender>
		)
		expect(screen.getByTestId("counter"))
		expect(screen.getByTestId("value")).toHaveTextContent("77")
	})

	test("increment", async () => {
		
		render(
			<ComponentRender route="/" initialStore={{ counter: { value: 77 } }}>
				<Counter />
			</ComponentRender>
		)

		expect(screen.getByTestId("counter"))
		expect(screen.getByTestId("value")).toHaveTextContent("77")
	
		await userEvent.click(screen.getByTestId("increment"))

		expect(screen.getByTestId("value")).toHaveTextContent("78")
	})
})
