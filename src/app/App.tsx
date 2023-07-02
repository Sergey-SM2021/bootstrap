import { BrowserRouter } from "react-router-dom"
import "./style/index.scss"
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { classNames } from "../shared/lib/helpers/classNames/classNames"
import { RouterProvider } from "./providers/RouterProvider/ui/RouterProvider"
import { Navbar } from "widgets/navbar/ui/navbar"
import { Sidebar } from "widgets/sidebar"
import "shared/config/i18nConfig/i18n"

export const App = () => {
	const { theme } = useTheme()
	return (
		<BrowserRouter>
			<div className={classNames("app", {}, [theme])}>
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<RouterProvider />
				</div>
			</div>
		</BrowserRouter>
	)
}
