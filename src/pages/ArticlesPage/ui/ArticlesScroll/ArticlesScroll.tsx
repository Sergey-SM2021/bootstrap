import { ArticleList } from "entity/Article/ui/ArticleList/ArticleList"
import {
	getHasMore,
	getIsLoading,
	getPage,
	getView,
} from "pages/ArticlesPage/model/selectors/ArticlePageSelectors"
import { getArticles } from "pages/ArticlesPage/model/services/getArticles"
import { articlesSelectors } from "pages/ArticlesPage/model/slice/ArticlePage"
import { useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import clx from "./ArticlesPage.module.scss"

export const ArticlesScroll = () => {
	const hasMore = useSelector(getHasMore)
	const articles = useSelector(articlesSelectors.selectAll)
	const isLoading = useSelector(getIsLoading)
	const dispatch = useAppDispatch()
	const page = useSelector(getPage)
	const view = useSelector(getView)

	const onIntersecting = useCallback(() => {
		setTimeout(async () => {
			if (hasMore) {
				await dispatch(getArticles({ page, reset: false }))
			}
		}, 500)
	}, [page, hasMore, dispatch])

	useEffect(() => {
		dispatch(getArticles({ page, reset: false }))
	}, [dispatch, page])

	return (
		<ArticleList
			hasMore={hasMore}
			endReached={onIntersecting}
			className={clx.articles}
			articles={articles}
			isLoading={isLoading}
			mode={view}
		/>
	)
}
