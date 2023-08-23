import { Article } from "entity/Article/model/types/Article"
import { memo } from "react"
import { ArticleItem } from "../ArticleItem/ArticleItem"
import clx from "./ArticleList.module.scss"

interface ArticleListProps {
  articles: Article[];
  mode: "big" | "small";
}

export const ArticleList = memo((props: ArticleListProps) => {
	const { articles, mode } = props
	return (
		<div className={clx[`ArticleList-${mode}`]}>
			{articles.map((el, index) => (
				<ArticleItem mode={mode} key={index} {...el} />
			))}
		</div>
	)
})
