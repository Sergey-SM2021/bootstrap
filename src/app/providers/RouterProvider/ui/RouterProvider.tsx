import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { PageLoader } from "widgets/pageLoader"
import { RouteGuard } from "./RouterGuard"
import { ForbiddenGuard } from "./ForbiddenGuard"
import { RouterConfig } from "../routerConfig/RouterConfig"

export const RouterProvider = () => {
	const routes = Object.values(RouterConfig)

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{routes.map(({ element, path, isPrivate, role }) => {
					const privateGuard = isPrivate ? (
						<RouteGuard>{element}</RouteGuard>
					) : (
						element
					)

					const forbiddenGuard = (
						<ForbiddenGuard role={role}>{privateGuard}</ForbiddenGuard>
					)

					return <Route key={path} element={forbiddenGuard} path={path} />
				})}
			</Routes>
		</Suspense>
	)
}
