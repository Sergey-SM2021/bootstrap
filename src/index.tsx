import { createRoot } from "react-dom/client"
import { App } from "./app/App"
import { ThemeProvider } from "./app/providers/ThemeProvider/ui/ThemeProvider"
import "./app/style/index.scss"
import { ReduxProvider } from "app/providers/ReduxProvider"

const root = createRoot(document.getElementById("root"))
root.render(
	<ReduxProvider>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</ReduxProvider>
)
