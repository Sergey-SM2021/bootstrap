import { AboutPage } from "pages/AboutPage"
import { ArticlePageAsync } from "pages/ArticleDetalisPage"
import { ArticlesPage } from "pages/ArticlesPage"
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
  NOT_FOUND = "not_found",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLE_DETALIS = "article_detalis",
}

export const RouterPaths: Record<RouterPages, string> = {
	about: "/about",
	home: "/",
	not_found: "*",
	profile: "/profile/",
	articles: "/articles",
	article_detalis: "/article/",
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
	not_found: {
		isPrivate: false,
		element: <NotFoundPage />,
		path: RouterPaths.not_found,
	},
	profile: {
		isPrivate: true,
		element: <ProfilePage />,
		path: `${RouterPaths.profile}:id`,
	},
	articles: {
		isPrivate: true,
		element: <ArticlesPage />,
		path: RouterPaths.articles,
	},
	article_detalis: {
		isPrivate: true,
		element: <ArticlePageAsync />,
		path: `${RouterPaths.article_detalis}:id`,
	},
}
