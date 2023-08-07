import { ComponentRender } from "shared/config/test"
import { ArticleDetalisPage } from "./ArticleDetalisPage"
import { render, screen } from "@testing-library/react"

describe("ArticleDetalisPage test", () => {
	test("component render", () => {
		render(
			<ComponentRender route="/" initialStore={{ counter: { value: 77 } }}>
				ArticleDetalisPage
			</ComponentRender>
		)
		expect(screen.getByTestId("counter"))
		expect(screen.getByTestId("value")).toHaveTextContent("77")
	})
})
