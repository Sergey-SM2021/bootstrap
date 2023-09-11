import { Role } from "entity/user/model/const/user"
import { AboutPage } from "pages/AboutPage"
import { Analytics } from "pages/Analytics/ui/Analytics"
import { ArticlePageAsync } from "pages/ArticleDetalisPage"
import { ArticlesPage } from "pages/ArticlesPage"
import { CreateArticle } from "pages/CreateArticle/CreateArticle"
import { ForbiddenPage } from "pages/ForbiddenPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage/ui/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"
import { GetRouter, RouterPages } from "shared/const/router"

type RoutePropsType = RouteProps & {
  isPrivate: boolean;
  role: Role[];
};

export const RouterConfig: Record<RouterPages, RoutePropsType> = {
	about: {
		path: GetRouter.About(),
		element: <AboutPage />,
		isPrivate: false,
		role: [Role.user, Role.admin],
	},
	home: {
		isPrivate: false,
		element: <MainPage />,
		path: GetRouter.Home(),
		role: [Role.user, Role.admin],
	},
	not_found: {
		isPrivate: false,
		element: <NotFoundPage />,
		path: GetRouter.NotFound(),
		role: [Role.user, Role.admin],
	},
	profile: {
		isPrivate: true,
		element: <ProfilePage />,
		path: GetRouter.Profile(":id"),
		role: [Role.user, Role.admin],
	},
	articles: {
		isPrivate: true,
		element: <ArticlesPage />,
		path: GetRouter.Articles(),
		role: [Role.user, Role.admin],
	},
	article_detalis: {
		isPrivate: true,
		element: <ArticlePageAsync />,
		path: GetRouter.ArticleDetalis(":id"),
		role: [Role.user, Role.admin],
	},
	article_create: {
		isPrivate: true,
		element: <CreateArticle />,
		path: GetRouter.NewArticle(),
		role: [Role.user, Role.admin],
	},
	article_edit: {
		isPrivate: true,
		element: <CreateArticle />,
		path: GetRouter.EditArticle(":id"),
		role: [Role.user, Role.admin],
	},
	analytics: {
		role: [Role.admin],
		isPrivate: true,
		element: <Analytics />,
		path: GetRouter.Analytics(),
	},
	forbidden: {
		role: [Role.user, Role.admin],
		isPrivate: false,
		element: <ForbiddenPage />,
		path: GetRouter.Forbidden(),
	},
}
