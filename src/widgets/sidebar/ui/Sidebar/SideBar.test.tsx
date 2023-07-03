import { fireEvent, render, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import { RenderWithTranslation } from "shared/lib/helpers/renderWithTranslation"

describe("sideBar", () => {
	it("render success", () => {
		render(
			<RenderWithTranslation>
				<Sidebar />
			</RenderWithTranslation>
		)
		expect(screen.getByTestId("sidebar")).toBeInTheDocument()
	})

	it("sideBar toggle", () => {
		render(
			<RenderWithTranslation>
				<Sidebar />
			</RenderWithTranslation>
		)
		const toggleButton = screen.getByTestId("sidebar-toggle")
		expect(screen.getByTestId("sidebar")).toHaveClass("rolledUp")
		fireEvent.click(toggleButton)
		expect(screen.getByTestId("sidebar")).not.toHaveClass("rolledUp")
	})
})
