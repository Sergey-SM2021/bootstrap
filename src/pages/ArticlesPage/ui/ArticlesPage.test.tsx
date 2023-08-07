import { ComponentRender } from "shared/config/test"
import { ArticlePage } from "./ArticlesPage"
import { render, screen } from "@testing-library/react"

describe("ArticlePage test", () => {
	test("component render", () => {
		render(
			<ComponentRender route="/" initialStore={{ counter: { value: 77 } }}>
				ArticlePage
			</ComponentRender>
		)
		expect(screen.getByTestId("counter"))
		expect(screen.getByTestId("value")).toHaveTextContent("77")
	})
})
