import { RouterProvider } from "./providers/RouterProvider/ui/RouterProvider"
import { Sidebar } from "widgets/sidebar"
import "shared/config/i18nConfig/i18n"
import { ErrorBoundary } from "./providers/ErrorBoundary"
import { ErrorPage } from "widgets/ErrorPage"
import { useEffect } from "react"
import { actions } from "entity/user"
import { getInited } from "entity/user"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useSelector } from "react-redux"
import { Navbar } from "widgets/navbar"

export const App = () => {
	const dispatch = useAppDispatch()
	const inited = useSelector(getInited)

	useEffect(() => {
		dispatch(actions.initAuthData())
	}, [dispatch])

	return (
		<div className={"app"}>
			<ErrorBoundary fallback={<ErrorPage />}>
				<Navbar />
				<div className="content-page">
					<Sidebar />
					{inited && <RouterProvider />}
				</div>
			</ErrorBoundary>
		</div>
	)
}
