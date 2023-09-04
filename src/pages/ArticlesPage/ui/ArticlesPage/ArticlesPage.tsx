import { memo, useEffect } from "react"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import { Filters } from "../filters/filters"
import { Flex } from "shared/ui/Flex/Flex"
import { useSearchParams } from "react-router-dom"
import clx from "./ArticlesPage.module.scss"
import {
	ArticlePageReducer,
} from "pages/ArticlesPage/model/slice/ArticlePage"
import { InitSearchParams } from "pages/ArticlesPage/model/services/InitSearchParams"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { ArticlesScroll } from "../ArticlesScroll/ArticlesScroll"

const ArticlesPage = memo(() => {
	const [searchParams] = useSearchParams()
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(InitSearchParams(searchParams))
		// eslint-disable-next-line
  }, []);

	return (
		<AsyncComponent
			reducer={ArticlePageReducer}
			reducerName="ArticlesPageReducer"
		>
			<Flex direction="column" gap={16} className={clx.content}>
				<Filters />
				<ArticlesScroll />
			</Flex>
		</AsyncComponent>
	)
})

export default ArticlesPage
