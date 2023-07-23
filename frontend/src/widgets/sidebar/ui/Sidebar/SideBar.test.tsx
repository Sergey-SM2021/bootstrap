import { fireEvent, render, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import { ComponentRender } from "shared/config/test"

describe("sideBar", () => {
	it("render success", () => {
		render(
			<ComponentRender route="/">
				<Sidebar />
			</ComponentRender>
		)
		expect(screen.getByTestId("sidebar")).toBeInTheDocument()
	})

	it("sideBar toggle", () => {
		render(
			<ComponentRender route="/">
				<Sidebar />
			</ComponentRender>
		)
		const toggleButton = screen.getByTestId("sidebar-toggle")
		expect(screen.getByTestId("sidebar")).toHaveClass("rolledUp")
		fireEvent.click(toggleButton)
		expect(screen.getByTestId("sidebar")).not.toHaveClass("rolledUp")
	})
})
