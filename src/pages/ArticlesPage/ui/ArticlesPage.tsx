import { ArticleList } from "entity/Article/ui/ArticleList/ArticleList"
import { memo, useCallback, useRef } from "react"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import {
	ArticlePageReducer,
	setBigView,
	setSmallView,
} from "../model/slice/ArticlePage"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { getArticles } from "../model/services/getArticles"
import { useSelector } from "react-redux"
import { articlesSelectors } from "../model/slice/ArticlePage"
import { Filters } from "features/filters"
import { Flex } from "shared/ui/Flex/Flex"
import { getPage, getView } from "../model/selectors/ArticlePageSelectors"
import { useIntersectionObserver } from "shared/lib/hooks/useIntersectionObserver"
import { SaveScroll } from "features/SaveScroll"

const ArticlesPage = memo(() => {
	const page = useSelector(getPage)
	const dispatch = useAppDispatch()

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
		await dispatch(getArticles(page))
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
					<Filters
						activeView={view}
						articlesLength={articles.length}
						handlerChange={handlerChangeView}
					/>
					<ArticleList articles={articles} isLoading={false} mode={view} />
				</Flex>
				<div ref={elementForObserv}></div>
			</SaveScroll>
		</AsyncComponent>
	)
})

export default ArticlesPage
