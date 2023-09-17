import { Text, TextSize } from "shared/ui/Text/Text"
import clx from "./ArticleParagraph.module.scss"
import { ArticleTextBlock } from "../../model/types/Article"

interface IArticleParagraph {
  block: ArticleTextBlock;
  className?: string;
}

export const ArticleParagraph = (props: IArticleParagraph) => {
	const { block, className } = props
	const { paragraphs, title } = block
	return (
		<div className={className}>
			{title ? (
				<Text size={TextSize.lg} className={clx.title}>
					{title}
				</Text>
			) : null}
			{paragraphs.map((el, index) => (
				<Text className={clx.paragraph} key={index}>
					{el}
				</Text>
			))}
		</div>
	)
}
