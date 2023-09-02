import { ArticleList } from "entity/Article/ui/ArticleList/ArticleList"
import { memo, useCallback, useEffect } from "react"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import {
	ArticlePageReducer,
	setBigView,
	setSmallView,
} from "../model/slice/ArticlePage"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { getArticles } from "features/filters/model/services/getArticles"
import { useSelector } from "react-redux"
import { articlesSelectors } from "../model/slice/ArticlePage"
import { getIsLoading, getView } from "../model/selectors/ArticlePageSelectors"
import { Filters } from "features/filters"
import { Flex } from "shared/ui/Flex/Flex"
import {
	getHasMore,
	getPage,
} from "features/filters/model/selectors/selectors"
import { useSearchParams } from "react-router-dom"
import { InitSearchParams } from "../model/services/InitSearchParams"
import clx from "./ArticlesPage.module.scss"

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
