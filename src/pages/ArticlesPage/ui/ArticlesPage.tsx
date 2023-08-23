import { ArticleList } from "entity/Article/ui/ArticleList/ArticleList"
import { memo } from "react"

const ArticlesPage = memo(() => {
	return (<ArticleList articles={[]} isLoading={false} mode="small"/>)
})

export default ArticlesPage