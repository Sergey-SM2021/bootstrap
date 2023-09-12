import { Suspense, memo } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Layout } from "shared/ui/Layout/Layout"
import { ArticleComments } from "features/ArticleComments"
import { ArticleDetalis } from "entity/ArticleDetalis"
import { RateArticle } from "features/RateArticle"
import { GetSameArticles } from "features/getSameArticles"
import { Spinner } from "shared/ui/spinner"

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
			<Suspense fallback={<Spinner />}>
				<GetSameArticles id={id} />
			</Suspense>
			<Suspense fallback={<Spinner />}>
				<RateArticle />
			</Suspense>
			<Suspense fallback={<Spinner />}>
				<ArticleComments id={Number(id)} />
			</Suspense>
		</Layout>
	)
})

export default ArticleDetalisPage
