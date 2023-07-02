import { useState } from "react"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import clx from "./Sidebar.module.scss"
import { AppButton, AppButtonTheme } from "shared/ui/appButton/appButton"
import { ThemeSwitcher } from "shared/ui/themeSwitcher"
import { LangSwitcher } from "shared/ui/langSwitcher/langSwitcher"
import { useTranslation } from "react-i18next"

export const Sidebar = () => {
	const {t} = useTranslation()
	const [rolledUp, setRolledUp] = useState<boolean>(true)

	const handlerRollUp = () => {
		setRolledUp((prev) => !prev)
	}

	return (
		<div className={classNames(clx.sidebar, { [clx.rolledUp]: rolledUp }, [])}>
			<AppButton theme={AppButtonTheme.primary} onClick={handlerRollUp}>
				{t("rollup")}
			</AppButton>
			<div className={clx.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	)
}
