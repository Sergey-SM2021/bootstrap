import { BrowserRouter } from "react-router-dom"
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { classNames } from "../shared/lib/helpers/classNames/classNames"
import { RouterProvider } from "./providers/RouterProvider/ui/RouterProvider"
import { Navbar } from "widgets/navbar/ui/navbar"
import { Sidebar } from "widgets/sidebar"
import "shared/config/i18nConfig/i18n"
import { ErrorBoundary } from "./providers/ErrorBoundary"
import { ErrorPage } from "widgets/ErrorPage"

export const App = () => {
	const { theme } = useTheme()

	return (
		<BrowserRouter>
			<div className={classNames("app", {}, [theme])}>
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
