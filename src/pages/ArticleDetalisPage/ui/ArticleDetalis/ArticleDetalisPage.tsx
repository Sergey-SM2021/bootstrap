import { memo } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Layout } from "shared/ui/Layout/Layout"
import { ArticleComments } from "features/ArticleComments"
import { ArticleDetalis } from "entity/ArticleDetalis"
import { GetSameArticles } from "features/getSameArticles/ui/GetSameArticles"
import { Rating } from "shared/ui/rating/Rating"

const ArticleDetalisPage = memo(() => {
	const { id } = useParams()
	const { t } = useTranslation("articlePage")
	const nav = useNavigate()

	const handlerBack = () => {
		nav(-1)
	}

	if (!id) {
		return <div>{t("article not found")}</div>
	}

	return (
		<Layout>
			<AppButton theme={AppButtonTheme.primary} onClick={handlerBack}>
				{t("back")}
			</AppButton>
			<ArticleDetalis id={Number(id)} />
			<GetSameArticles id={id} />
			<Rating />
			<ArticleComments id={Number(id)} />
		</Layout>
	)
})

export default ArticleDetalisPage
