import { memo } from "react"
import { Code } from "shared/ui/code/Code"
import clx from "./ArticleCode.module.scss"
import { ArticleCodeBlock } from "../../model/types/Article"

interface IArticleCode {
  block: ArticleCodeBlock;
}

export const ArticleCode = memo(({ block }: IArticleCode) => {
	const { code } = block
	return <Code className={clx.Code}>{code}</Code>
})
