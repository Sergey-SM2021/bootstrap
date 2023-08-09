import { ArticleCodeBlock } from "entity/Article/model/types/Article"
import { memo } from "react"
import { Code } from "shared/ui/code/Code"
import clx from "./ArticleCode.module.scss"

interface IArticleCode {
  block: ArticleCodeBlock;
}

export const ArticleCode = memo(({ block }: IArticleCode) => {
	const { code } = block
	return <Code className={clx.Code}>{code}</Code>
})
