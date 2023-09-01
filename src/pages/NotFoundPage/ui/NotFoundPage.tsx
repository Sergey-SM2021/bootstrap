import { useTranslation } from "react-i18next"
import style from "./NotFoundPage.module.scss"
import { Layout } from "shared/ui/Layout/Layout"

export const NotFoundPage = () => {
	const { t } = useTranslation()
	return (
		<Layout>
			<div className={style.NotFoundPage}>{t("not found page")}</div>
		</Layout>
	)
}
