import { Article, ArticleLabel } from "entity/Article/model/types/Article"
import { memo } from "react"
import { ArticleItem } from "../ArticleItem/ArticleItem"
import clx from "./ArticleList.module.scss"
import { ArticleItemSkeleton } from "../ArticleItem/ArticleItemSkeleton"
import { Text } from "shared/ui/Text/Text"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/helpers/classNames/classNames"

interface ArticleListProps {
  articles: Article[];
  mode: "big" | "small";
  isLoading: boolean;
  className?: string;
}

export const ArticleList = memo((props: ArticleListProps) => {
	const { articles, isLoading, mode, className = "" } = props
	const { t } = useTranslation()

	if (isLoading) {
		return (
			<div className={className}>
				{new Array(10).fill(<ArticleItemSkeleton mode={mode} />)}
			</div>
		)
	}

	return articles.length ? (
		<div className={classNames(clx[`ArticleList-${mode}`], {}, [className])}>
			{articles.map((el, index) => (
				<ArticleItem
					mode={mode}
					key={index}
					{...el}
					label={[ArticleLabel.ECONOMICS]}
				/>
			))}
		</div>
	) : (
		<div>
			<Text>{t("empty articles")}</Text>
		</div>
	)
})
