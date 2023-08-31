import { ArticleList } from "entity/Article/ui/ArticleList/ArticleList"
import { memo, useCallback, useEffect, useRef } from "react"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import {
	ArticlePageReducer,
	setBigView,
	setSmallView,
} from "../model/slice/ArticlePage"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { getArticles } from "../../../features/filters/model/services/getArticles"
import { useSelector } from "react-redux"
import { articlesSelectors } from "../model/slice/ArticlePage"
import { Filters } from "features/filters"
import { Flex } from "shared/ui/Flex/Flex"
import { getView } from "../model/selectors/ArticlePageSelectors"
import { useIntersectionObserver } from "shared/lib/hooks/useIntersectionObserver"
import { SaveScroll } from "features/SaveScroll"
import {
	getHasMore,
	getPage,
} from "features/filters/model/selectors/selectors"
import { useSearchParams } from "react-router-dom"
import { InitSearchParams } from "../model/services/InitSearchParams"

const ArticlesPage = memo(() => {
	const page = useSelector(getPage)
	const hasMore = useSelector(getHasMore)
	const dispatch = useAppDispatch()
	const [searchParams] = useSearchParams()

	useEffect(() => {
		dispatch(InitSearchParams(searchParams))
		// eslint-disable-next-line
	}, [])

	const elementForObserv = useRef<HTMLDivElement>(null)

	const articles = useSelector(articlesSelectors.selectAll)

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

	const view = useSelector(getView)

	const onIntersecting = async () => {
		setTimeout(async () => {
			if (hasMore) {
				await dispatch(getArticles({ page, reset: false }))
			}
		}, 500)
	}

	useIntersectionObserver({
		elementForObserv: elementForObserv.current,
		onIntersecting,
	})

	return (
		<AsyncComponent
			reducer={ArticlePageReducer}
			reducerName="ArticlesPageReducer"
		>
			<SaveScroll>
				<Flex direction="column" gap={16}>
					<Filters activeView={view} handlerChangeView={handlerChangeView} />
					<ArticleList articles={articles} isLoading={false} mode={view} />
				</Flex>
				<div ref={elementForObserv}></div>
			</SaveScroll>
		</AsyncComponent>
	)
})

export default ArticlesPage
