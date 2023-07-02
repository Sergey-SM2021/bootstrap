import { useTranslation } from "react-i18next"
import style from "./ErrorPage.module.scss"
import { AppButton, AppButtonTheme } from "shared/ui/appButton/appButton"

export const ErrorPage = () => {
	const { t } = useTranslation()
	const handlerReload = () => {
		location.reload()
	}
	return (
		<div className={style.errorPage}>
			{t("crash")}
			<AppButton onClick={handlerReload} theme={AppButtonTheme.primary}>
				{t("reload")}
			</AppButton>
		</div>
	)
}
