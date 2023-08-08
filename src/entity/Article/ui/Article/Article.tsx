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
import clx from "./Article.module.scss"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import { Flex } from "shared/ui/Flex/Flex"
import { useTranslation } from "react-i18next"

interface ArticleProps {
  id: number;
}

export const Article = memo(({ id }: ArticleProps) => {
	const dispatch = useAppDispatch()
	const { t } = useTranslation()
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
		content = <div>{t("can't get the article")}</div>
	} else if (isLoading) {
		content = (
			<Flex gap={10} direction="column">
				<Skeleton
					className={clx.avatar}
					radius="50%"
					width={100}
					height={100}
				/>
				<Skeleton height={50} width={"50%"} radius={5} />
				<Skeleton height={25} width={"50%"} radius={5} />
				<Skeleton height={100} width={"100%"} radius={5} />
			</Flex>
		)
	} else {
		content = (
			<div>
				{article?.title}
			</div>
		)
	}

	return (
		<AsyncComponent reducer={ArticleReducer} reducerName="ArticleReducer">
			<div className={clx.article}>{content}</div>
		</AsyncComponent>
	)
})
