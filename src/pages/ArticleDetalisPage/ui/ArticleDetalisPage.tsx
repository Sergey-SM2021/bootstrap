import { Article } from "entity/Article"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"

const ArticleDetalisPage = memo(() => {
	const { id } = useParams()
	const { t } = useTranslation("articlePage")

	if (!id) {
		return <div>
			{t("article not found")}
		</div>
	}

	return (
		<div>
			<Article id={Number(id)} />
		</div>
	)
})

export default ArticleDetalisPage
