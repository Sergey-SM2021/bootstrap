import { ArticleList } from "entity/Article/ui/ArticleList/ArticleList"
import { memo, useCallback, useEffect } from "react"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { getArticles } from "../../model/services/getArticles"
import { useSelector } from "react-redux"
import { Filters } from "../filters/filters"
import { Flex } from "shared/ui/Flex/Flex"
import { useSearchParams } from "react-router-dom"
import clx from "./ArticlesPage.module.scss"
import {
	ArticlePageReducer,
	articlesSelectors,
	setBigView,
	setSmallView,
} from "pages/ArticlesPage/model/slice/ArticlePage"
import {
	getHasMore,
	getIsLoading,
	getPage,
	getView,
} from "pages/ArticlesPage/model/selectors/ArticlePageSelectors"
import { InitSearchParams } from "pages/ArticlesPage/model/services/InitSearchParams"

const ArticlesPage = memo(() => {
	const page = useSelector(getPage)
	const hasMore = useSelector(getHasMore)
	const dispatch = useAppDispatch()
	const [searchParams] = useSearchParams()
	const articles = useSelector(articlesSelectors.selectAll)
	const isLoading = useSelector(getIsLoading)
	const view = useSelector(getView)

	useEffect(() => {
		dispatch(getArticles({ page, reset: false }))
		dispatch(InitSearchParams(searchParams))
		// eslint-disable-next-line
  }, []);

	const onIntersecting = useCallback(() => {
		setTimeout(async () => {
			if (hasMore) {
				await dispatch(getArticles({ page, reset: false }))
			}
		}, 500)
	}, [page, hasMore, dispatch])

	const handlerChangeView = useCallback(
		(view: "big" | "small") => () => {
			if (view === "big") {
				dispatch(setBigView())
			} else {
				dispatch(setSmallView())
			}
		},
		[dispatch]
	)

	return (
		<AsyncComponent
			reducer={ArticlePageReducer}
			reducerName="ArticlesPageReducer"
		>
			<Flex direction="column" gap={16} className={clx.content}>
				<Filters activeView={view} handlerChangeView={handlerChangeView} />
				<ArticleList
					hasMore={hasMore}
					endReached={onIntersecting}
					className={clx.articles}
					articles={articles}
					isLoading={isLoading}
					mode={view}
				/>
			</Flex>
		</AsyncComponent>
	)
})

export default ArticlesPage
