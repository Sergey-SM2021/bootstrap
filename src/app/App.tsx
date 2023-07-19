import { BrowserRouter } from "react-router-dom"
import { RouterProvider } from "./providers/RouterProvider/ui/RouterProvider"
import { Navbar } from "widgets/navbar/ui/navbar"
import { Sidebar } from "widgets/sidebar"
import "shared/config/i18nConfig/i18n"
import { ErrorBoundary } from "./providers/ErrorBoundary"
import { ErrorPage } from "widgets/ErrorPage"
import { useEffect } from "react"
import { useAppDispatch } from "./providers/ReduxProvider/config/store"
import { initAuthData } from "entity/user/model/slice/userSlice"

export const App = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(initAuthData())
	}, [dispatch])

	return (
		<BrowserRouter>
			<div className={"app"}>
				<ErrorBoundary fallback={<ErrorPage />}>
					<Navbar />
					<div className="content-page">
						<Sidebar />
						<RouterProvider />
					</div>
				</ErrorBoundary>
			</div>
		</BrowserRouter>
	)
}
