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
import { Avatar } from "shared/ui/avatar/avatar"
import { Text, TextSize } from "shared/ui/Text/Text"
import Calendar from "shared/assets/calendar.svg"
import Views from "shared/assets/views.svg"
import { Icon } from "shared/ui/icon/Icon"
import { ArticleBlock, ArticleType } from "entity/Article/model/types/Article"
import { ArticleCode } from "../ArticleCode/ArticleCode"
import { ArticleImg } from "../ArticleImg/ArticleImg"
import { ArticleParagraph } from "../ArticleParagraph/ArticleParagraph"

interface ArticleProps {
  id: number;
}

const renderArticleBlock = (articleBlock: ArticleBlock) => {
	switch (articleBlock.type) {
	case ArticleType.CODE:
		return <ArticleCode block={articleBlock} />
	case ArticleType.IMAGE:
		return <ArticleImg block={articleBlock} />
	case ArticleType.TEXT:
		return <ArticleParagraph block={articleBlock} />
	}
}

export const Article = memo(({ id }: ArticleProps) => {
	const dispatch = useAppDispatch()
	const { t } = useTranslation()
	const article = useSelector(getArticleDetalisData)
	const error = useSelector(getArticleDetalisError)
	const isLoading = useSelector(getArticleDetalisIsLoading)
	console.log(article)

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
			<Flex gap={8} direction="column">
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
			<>
				<Flex justify="center">
					<Avatar src={article?.img ?? ""} className={clx.avatar} />
				</Flex>
				<Text size={TextSize.xxl}>{article?.title}</Text>
				<Text size={TextSize.xl}>{article?.subtitle}</Text>
				<Flex align="center" gap={8}>
					<Icon>
						<Views />
					</Icon>
					{article?.views}
				</Flex>
				<Flex align="center" gap={8}>
					<Icon>
						<Calendar />
					</Icon>
					{article?.createdAt}
				</Flex>
				{article?.blocks.map(renderArticleBlock)}
			</>
		)
	}

	return (
		<AsyncComponent reducer={ArticleReducer} reducerName="ArticleReducer">
			<div>{content}</div>
		</AsyncComponent>
	)
})
