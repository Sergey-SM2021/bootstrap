import { ComponentRender } from "shared/config/test"
import { RouterProvider } from "./RouterProvider"
import { render, waitFor } from "@testing-library/react"
import { Role } from "entity/user"
import { $api } from "shared/api/api"
import { GetRouter } from "shared/const/router"

const authUserData = {
	token: "",
	avatar: "",
	id: "",
	role: Role.user,
}

describe("router tests", () => {
	it("user can visit home page ", async () => {
		const { getByTestId } = render(
			<ComponentRender route={GetRouter.Home()}>
				<RouterProvider />
			</ComponentRender>
		)

		await waitFor(() => getByTestId("title"))

		expect(getByTestId("title")).toBeInTheDocument()
	})

	describe("authorized user can visit all pages", () => {
		it("visit articles page", async () => {
			jest.spyOn($api, "get").mockReturnValue(Promise.resolve({ data: [] }))

			const { getByTestId } = render(
				<ComponentRender
					route={GetRouter.Articles()}
					initialStore={{
						user: {
							data: authUserData,
						},
					}}
				>
					<RouterProvider />
				</ComponentRender>
			)

			await waitFor(() => {
				getByTestId("ArticlesPage")
			})

			expect(getByTestId("ArticlesPage")).toBeInTheDocument()
		})

		it("visit articles detalis page", async () => {
			jest.spyOn($api, "get").mockReturnValue(Promise.resolve({ data: {} }))

			const { getByTestId } = render(
				<ComponentRender
					route={GetRouter.ArticleDetalis(1)}
					initialStore={{
						user: {
							data: authUserData,
						},
					}}
				>
					<RouterProvider />
				</ComponentRender>
			)

			await waitFor(() => {
				getByTestId("article-detalis-page")
			})

			expect(getByTestId("article-detalis-page")).toBeInTheDocument()
		})

		it("visit profile page", async () => {
			const { getByTestId } = render(
				<ComponentRender
					route={GetRouter.Profile(1)}
					initialStore={{
						user: {
							data: authUserData,
						},
					}}
				>
					<RouterProvider />
				</ComponentRender>
			)

			await waitFor(() => {
				getByTestId("profile")
			})

			expect(getByTestId("profile")).toBeInTheDocument()
		})
	})

	describe("unauthorized user can visit public pages", () => {})

	describe("unauthorized user can't visit private pages", () => {
		it("failed visit articles page and redirect to home page", async () => {
			const { getByTestId } = render(
				<ComponentRender route={GetRouter.Articles()}>
					<RouterProvider />
				</ComponentRender>
			)

			await waitFor(() => getByTestId("title"))

			expect(getByTestId("title")).toBeInTheDocument()
		})

		it("failed visit articles detalis page and redirect to home page", async () => {
			const { getByTestId } = render(
				<ComponentRender route={GetRouter.ArticleDetalis(1)}>
					<RouterProvider />
				</ComponentRender>
			)

			await waitFor(() => getByTestId("title"))

			expect(getByTestId("title")).toBeInTheDocument()
		})

		it("failed visit profile page and redirect to home page", async () => {
			const { getByTestId } = render(
				<ComponentRender route={GetRouter.Profile(1)}>
					<RouterProvider />
				</ComponentRender>
			)

			await waitFor(() => getByTestId("title"))

			expect(getByTestId("title")).toBeInTheDocument()
		})
	})
})
