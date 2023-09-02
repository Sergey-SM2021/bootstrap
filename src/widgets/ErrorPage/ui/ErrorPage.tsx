import { useTranslation } from "react-i18next"
import style from "./ErrorPage.module.scss"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Flex } from "shared/ui/Flex/Flex"

export const ErrorPage = () => {
	const { t } = useTranslation()
	const handlerReload = () => {
		location.reload()
	}
	return (
		<Flex
			direction="column"
			align="center"
			justify="center"
			className={style.errorPage}
		>
			{t("crash")}
			<AppButton onClick={handlerReload} theme={AppButtonTheme.primary}>
				{t("reload")}
			</AppButton>
		</Flex>
	)
}
