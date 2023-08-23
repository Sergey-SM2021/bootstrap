import { Article } from "entity/Article/model/types/Article"
import { memo } from "react"
import { ArticleItem } from "../ArticleItem/ArticleItem"
import clx from "./ArticleList.module.scss"
import { ArticleItemSkeleton } from "../ArticleItem/ArticleItemSkeleton"

interface ArticleListProps {
  articles: Article[];
  mode: "big" | "small";
  isLoading: boolean;
}

export const ArticleList = memo((props: ArticleListProps) => {
	const { articles, isLoading, mode } = props

	if (isLoading) {
		return (
			<div className={clx[`ArticleList-${mode}`]}>
				{new Array(10).fill(<ArticleItemSkeleton mode={mode} />)}
			</div>
		)
	}

	return (
		<div className={clx[`ArticleList-${mode}`]}>
			{articles.map((el, index) => (
				<ArticleItem mode={mode} key={index} {...el} />
			))}
		</div>
	)
})
