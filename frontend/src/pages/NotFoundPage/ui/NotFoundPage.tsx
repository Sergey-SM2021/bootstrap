import { useTranslation } from "react-i18next"
import style from "./NotFoundPage.module.scss"

export const NotFoundPage = () => {
	const { t } = useTranslation()
	return <div className={style.NotFoundPage}>{t("not found page")}</div>
}
