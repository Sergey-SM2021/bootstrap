import { memo } from "react"
import { Text } from "shared/ui/Text/Text"
import clx from "./ArticleImage.module.scss"
import { ArticleImageBlock } from "../../model/types/Article"

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
