import { memo } from "react"
import { useTranslation } from "react-i18next"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"

interface LangSwitcherProps {
  short: boolean;
}

export const LangSwitcher = memo(({ short }: LangSwitcherProps) => {
	const { i18n, t } = useTranslation()

	const handlerTranslate = () => {
		if (i18n.language === "en") {
			i18n.changeLanguage("ru")
		} else {
			i18n.changeLanguage("en")
		}
	}

	return (
		<AppButton onClick={handlerTranslate} theme={AppButtonTheme.clear}>
			{short ? t("language") : t("lang")}
		</AppButton>
	)
})


LangSwitcher.displayName = "LangSwitcher"