import { ArticleList } from "entity/Article"
import { articlePageSelectors } from "pages/ArticlesPage"
import { getArticles } from "pages/ArticlesPage"
import { articlesSelectors } from "../../model/slice/ArticlePage"
import { useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import clx from "./ArticlesPage.module.scss"

export const ArticlesScroll = () => {
	const hasMore = useSelector(articlePageSelectors.getHasMore)
	const articles = useSelector(articlesSelectors.selectAll)
	const isLoading = useSelector(articlePageSelectors.getIsLoading)
	const dispatch = useAppDispatch()
	const page = useSelector(articlePageSelectors.getPage)
	const view = useSelector(articlePageSelectors.getView)

	const onIntersecting = useCallback(() => {
		setTimeout(async () => {
			if (hasMore) {
				await dispatch(getArticles({ page, reset: false }))
			}
		}, 500)
	}, [page, hasMore, dispatch])

	useEffect(() => {
		dispatch(getArticles({ page, reset: false }))
		// eslint-disable-next-line
  }, []);

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
