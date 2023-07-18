import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Text } from "./Text"

describe("<Text />", () => {
	test("it should mount", () => {
		render(<Text />)

		const text = screen.getByTestId("Text")

		expect(text).toBeInTheDocument()
	})
})
