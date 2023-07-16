import { BrowserRouter } from "react-router-dom"
import { RouterProvider } from "./providers/RouterProvider/ui/RouterProvider"
import { Navbar } from "widgets/navbar/ui/navbar"
import { Sidebar } from "widgets/sidebar"
import "shared/config/i18nConfig/i18n"
import { ErrorBoundary } from "./providers/ErrorBoundary"
import { ErrorPage } from "widgets/ErrorPage"
import { ReduxProvider } from "./providers/ReduxProvider"

export const App = () => {
	return (
		<ReduxProvider>
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
		</ReduxProvider>
	)
}
