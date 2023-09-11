export enum RouterPages {
  HOME = "home",
  ABOUT = "about",
  NOT_FOUND = "not_found",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLE_DETALIS = "article_detalis",
  ARTICLE_CREATE = "article_create",
  ARTICLE_EDIT = "article_edit",
  ANALYTICS = "analytics",
  FORBIDDEN = "forbidden",
}

export const GetRouter = {
	About() {
		return "/about"
	},
	Home() {
		return "/"
	},
	NotFound() {
		return "*"
	},
	Profile(id: number | string) {
		return `/profile/${id}`
	},
	Articles() {
		return "/articles"
	},
	ArticleDetalis(id: number | string) {
		return `/article/${id}`
	},
	NewArticle() {
		return "/article/new"
	},
	EditArticle(id: number | string) {
		return `/article/${id}/edit`
	},
	Analytics() {
		return "/analytics"
	},
	Forbidden() {
		return "/forbidden"
	},
}