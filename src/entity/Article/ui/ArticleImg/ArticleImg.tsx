import { ArticleImageBlock } from "entity/Article/model/types/Article"
import { memo } from "react"
import { Text } from "shared/ui/Text/Text"
import clx from "./ArticleImage.module.scss"

interface ArticleImgProps {
  block: ArticleImageBlock
}

export const ArticleImg = memo(({block}: ArticleImgProps) => {
	const { src, title } = block
	return <div className={clx.img}>
		<img src={src} />
		<Text>{title}</Text>
	</div>
})
