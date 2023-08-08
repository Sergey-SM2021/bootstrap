import { Article } from "entity/Article"
import { memo } from "react"
import { useParams } from "react-router-dom"

const ArticleDetalisPage = memo(() => {
	const { id } = useParams()

	if (!id) {
		return <div>
			console.error()
		</div>
	}

	return (
		<div>
			<Article id={Number(id)} />
		</div>
	)
})

export default ArticleDetalisPage
