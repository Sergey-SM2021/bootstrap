import { ArticleList } from "entity/Article/ui/ArticleList/ArticleList"
import { memo, useEffect } from "react"
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
import { ChangeArticleView } from "features/changeArticlesView/changeArticlesView"
import { Flex } from "shared/ui/Flex/Flex"
import { getView } from "../model/selectors/ArticlePageSelectors"

const ArticlesPage = memo(() => {
	const dispatch = useAppDispatch()
	const articles = useSelector(articlesSelectors.selectAll)
	const handlerChangeView = (view: "big" | "small") => () => {
		if (view === "big") {
			dispatch(setBigView())
		} else {
			dispatch(setSmallView())
		}
	}
	const view = useSelector(getView)

	useEffect(() => {
		dispatch(getArticles())
		// eslint-disable-next-line
  }, []);

	return (
		<AsyncComponent
			reducer={ArticlePageReducer}
			reducerName="ArticlesPageReducer"
		>
			<Flex direction="column" gap={16}>
				<ChangeArticleView
					articlesLength={articles.length}
					handlerChange={handlerChangeView}
				/>
				<ArticleList articles={articles} isLoading={false} mode={view} />
			</Flex>
		</AsyncComponent>
	)
})

export default ArticlesPage
