import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage/ui/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"

type RoutePropsType = RouteProps & {
  private: boolean;
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
		private: false,
	},
	home: {
		private: false,
		element: <MainPage />,
		path: RouterPaths.home,
	},
	notfound: {
		private: false,
		element: <NotFoundPage />,
		path: RouterPaths.notfound,
	},
	profile: {
		private: true,
		element: <ProfilePage />,
		path: RouterPaths.profile,
	},
}
