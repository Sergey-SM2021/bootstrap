import { Article, ArticleLabel } from "entity/Article/model/types/Article"
import { memo } from "react"
import { ArticleItem } from "../ArticleItem/ArticleItem"
import clx from "./ArticleList.module.scss"
import { ArticleItemSkeleton } from "../ArticleItem/ArticleItemSkeleton"
import { Text } from "shared/ui/Text/Text"
import { useTranslation } from "react-i18next"

interface ArticleListProps {
  articles: Article[];
  mode: "big" | "small";
  isLoading: boolean;
}

export const ArticleList = memo((props: ArticleListProps) => {
	const { articles, isLoading, mode } = props
	const { t } = useTranslation()

	if (isLoading) {
		return (
			<div className={clx[`ArticleList-${mode}`]}>
				{new Array(10).fill(<ArticleItemSkeleton mode={mode} />)}
			</div>
		)
	}

	return articles.length ? (
		<div className={clx[`ArticleList-${mode}`]}>
			{articles.map((el, index) => (
				<ArticleItem mode={mode} key={index} {...el} label={[ArticleLabel.ECONOMICS]}/>
			))}
		</div>
	) : (
		<div>
			<Text>{t("empty articles")}</Text>
		</div>
	)
})
