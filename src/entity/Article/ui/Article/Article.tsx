import {
	getArticleDetalisData,
	getArticleDetalisError,
	getArticleDetalisIsLoading,
} from "entity/Article/model/selector/Article/ArticleDataSelector"
import { getArticle } from "entity/Article/model/services/getArticle/getArticle"
import { ArticleReducer } from "../../model/slice/Article"
import { memo, useEffect } from "react"
import { useSelector } from "react-redux"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { Spinner } from "shared/ui/spinner"
import clx from "./Article.module.scss"

interface ArticleProps {
  id: number;
}

export const Article = memo(({ id }: ArticleProps) => {
	const dispatch = useAppDispatch()
	const article = useSelector(getArticleDetalisData)
	const error = useSelector(getArticleDetalisError)
	const isLoading = useSelector(getArticleDetalisIsLoading)

	useEffect(() => {
		if (__PROJECT__ === "frontend") {
			dispatch(getArticle(id))
		}
	}, [dispatch, id])

	let content

	if (error) {
		content = <div>Не удалось получить статью</div>
	} else if (isLoading) {
		content = (
			<div>
				<Spinner />
			</div>
		)
	} else {
		content = (
			<div>
				<h2>article page</h2>
				{article?.title}
			</div>
		)
	}

	return (
		<AsyncComponent reducer={ArticleReducer} reducerName="ArticleReducer">
			<div className={clx.article}>
				{content}
			</div>
		</AsyncComponent>
	)
})
