import { useTranslation } from "react-i18next"
import { Layout } from "shared/ui/Layout/Layout"

export const CreateArticle = () => {
	const { t } = useTranslation()
	return (
		<Layout>
			<div>{t("create article")}</div>
		</Layout>
	)
}
