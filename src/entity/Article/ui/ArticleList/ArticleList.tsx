import { Article } from "entity/Article/model/types/Article"
import { memo, useState } from "react"
import { ArticleItem } from "../ArticleItem/ArticleItem"
import { Flex } from "shared/ui/Flex/Flex"

interface ArticleListProps {
  articles: Article[];
}

export const ArticleList = memo((props: ArticleListProps) => {
	const { articles } = props
	const [mode, setMode] = useState<"big" | "small">("big")
	return (
		<Flex gap={32} direction="column">
			{articles.map((el, index) => (
				<ArticleItem mode={mode} key={index} {...el} />
			))}
		</Flex>
	)
})
