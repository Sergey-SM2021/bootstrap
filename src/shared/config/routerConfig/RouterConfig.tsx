import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage/ui/NotFoundPage"
import { RouteProps } from "react-router-dom"

enum RouterPages {
  HOME = "home",
  ABOUT = "about",
  NOTFOUND = "notfound",
}

export const RouterPaths: Record<RouterPages, string> = {
	about: "/about",
	home: "/",
	notfound: "*",
}

export const RouterConfig: Record<RouterPages, RouteProps> = {
	about: {
		path: RouterPaths.about,
		element: <AboutPage />,
	},
	home: {
		element: <MainPage />,
		path: RouterPaths.home,
	},
	notfound: {
		element: <NotFoundPage />,
		path: RouterPaths.notfound,
	},
}
