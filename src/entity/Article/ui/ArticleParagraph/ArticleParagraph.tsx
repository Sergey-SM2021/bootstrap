import { ArticleTextBlock } from "entity/Article/model/types/Article"
import { Text, TextSize } from "shared/ui/Text/Text"
import clx from "./ArticleParagraph.module.scss"

interface IArticleParagraph {
  block: ArticleTextBlock;
}

export const ArticleParagraph = ({ block }: IArticleParagraph) => {
	const { paragraphs, title } = block
	return (
		<div>
			{title ? <Text size={TextSize.lg} className={clx.title}>{title}</Text> : null}
			{paragraphs.map((el, index) => (
				<Text className={clx.paragraph} key={index}>{el}</Text>
			))}
		</div>
	)
}
