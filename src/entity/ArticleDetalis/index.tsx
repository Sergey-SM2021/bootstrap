export { ArticleDetalis } from "./ui/ArticleDetalis/ArticleDetalis"
export { ArticleReducer } from "./model/slice/Article"
export type { ArticleSchema } from "./model/types/ArticleSchema"
export { ArticleLabel } from "./model/types/Article"
export { ArticleParagraph } from "./ui/ArticleParagraph/ArticleParagraph"
export type {
	Article as ArticleType,
	ArticleTextBlock,
} from "./model/types/Article"
export { ArticleType as ArticleMode } from "./model/types/Article"
export type { ArticleBlock } from "./model/types/Article"
export { getArticle } from "./model/services/getArticle/getArticle"

export {
	getArticleDetalisData,
	getArticleDetalisError,
	getArticleDetalisIsLoading,
} from "./model/selector/Article/ArticleDataSelector"
