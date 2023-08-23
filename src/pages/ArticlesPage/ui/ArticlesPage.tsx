import { ArticleList } from "entity/Article/ui/ArticleList/ArticleList"
import { memo } from "react"

const ArticlesPage = memo(() => {
	return (<ArticleList articles={[]}/>)
})

export default ArticlesPage