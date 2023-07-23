import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Input } from "./Input"

describe("<Input />", () => {
	test("it should mount", () => {
		render(<Input onChange={()=>{}} value=""/>)

		const input = screen.getByTestId("Input")

		expect(input).toBeInTheDocument()
	})
})
