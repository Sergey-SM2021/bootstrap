import { AboutPage } from "pages/AboutPage"
import { Analytics } from "pages/Analytics/ui/Analytics"
import { ArticlePageAsync } from "pages/ArticleDetalisPage"
import { ArticlesPage } from "pages/ArticlesPage"
import { CreateArticle } from "pages/CreateArticle/CreateArticle"
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
  ARTICLE_CREATE = "article_create",
  ARTICLE_EDIT = "article_edit",
  ANALYTICS = "analytics",
}

export const RouterPaths: Record<RouterPages, string> = {
	about: "/about",
	home: "/",
	not_found: "*",
	profile: "/profile/",
	articles: "/articles",
	article_detalis: "/article/",
	article_create: "/article/new",
	article_edit: "/article/:id/edit",
	analytics: "/analytics",
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
	article_create: {
		isPrivate: true,
		element: <CreateArticle />,
		path: RouterPaths.article_create,
	},
	article_edit: {
		isPrivate: true,
		element: <CreateArticle />,
		path: RouterPaths.article_edit,
	},
	analytics: {
		isPrivate: true,
		element: <Analytics />,
		path: RouterPaths.analytics,
	},
}
