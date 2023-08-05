import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { RouterConfig } from "shared/config/routerConfig/RouterConfig"
import { PageLoader } from "widgets/pageLoader"
import { RouteGuard } from "./RouterGuard"

export const RouterProvider = () => {
	const routes = Object.values(RouterConfig)

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{routes.map(({ element, path, isPrivate }) => (
					<Route
						key={path}
						element={
							isPrivate ? (
								<RouteGuard>
									<div className="page">{element}</div>
								</RouteGuard>
							) : (
								<div className="page">{element}</div>
							)
						}
						path={path}
					/>
				))}
			</Routes>
		</Suspense>
	)
}
