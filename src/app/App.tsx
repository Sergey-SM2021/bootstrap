import { BrowserRouter } from "react-router-dom"
import { RouterProvider } from "./providers/RouterProvider/ui/RouterProvider"
import { Navbar } from "widgets/navbar/ui/navbar"
import { Sidebar } from "widgets/sidebar"
import "shared/config/i18nConfig/i18n"
import { ErrorBoundary } from "./providers/ErrorBoundary"
import { ErrorPage } from "widgets/ErrorPage"
import { useEffect } from "react"
import { initAuthData } from "entity/user/model/slice/userSlice"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useSelector } from "react-redux"
import { getInited } from "entity/user/model/selector/getInited"

export const App = () => {
	const dispatch = useAppDispatch()
	const inited = useSelector(getInited)

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
						{inited && <RouterProvider />}
					</div>
				</ErrorBoundary>
			</div>
		</BrowserRouter>
	)
}
