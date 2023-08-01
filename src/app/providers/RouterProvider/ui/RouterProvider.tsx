import { getUser } from "entity/user/model/selector/getUserSelector"
import { Suspense } from "react"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { RouterConfig } from "shared/config/routerConfig/RouterConfig"
import { PageLoader } from "widgets/pageLoader"

const publicRoutes = Object.values(RouterConfig).filter((el) =>
	Boolean(!el.private)
)

export const RouterProvider = () => {
	const isAuth = useSelector(getUser)
	const routes = isAuth ? Object.values(RouterConfig) : publicRoutes

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{routes.map(({ element, path }) => (
					<Route
						key={path}
						element={<div className="page">{element}</div>}
						path={path}
					/>
				))}
			</Routes>
		</Suspense>
	)
}
