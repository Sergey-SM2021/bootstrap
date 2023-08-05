import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage/ui/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"

type RoutePropsType = RouteProps & {
  isPrivate: boolean;
};

enum RouterPages {
  HOME = "home",
  ABOUT = "about",
  NOTFOUND = "notfound",
  PROFILE = "profile",
}

export const RouterPaths: Record<RouterPages, string> = {
	about: "/about",
	home: "/",
	notfound: "*",
	profile: "/profile",
}

export const RouterConfig: Record<RouterPages, RoutePropsType> = {
	about: {
		path: RouterPaths.about,
		element: <AboutPage />,
		isPrivate: false,
	},
	home: {
		isPrivate: false,
		element: <MainPage />,
		path: RouterPaths.home,
	},
	notfound: {
		isPrivate: false,
		element: <NotFoundPage />,
		path: RouterPaths.notfound,
	},
	profile: {
		isPrivate: true,
		element: <ProfilePage />,
		path: RouterPaths.profile,
	},
}
