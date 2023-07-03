import { useState } from "react"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import clx from "./Sidebar.module.scss"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { ThemeSwitcher } from "widgets/themeSwitcher"
import { LangSwitcher } from "widgets/langSwitcher/langSwitcher"
import { useTranslation } from "react-i18next"

export const Sidebar = () => {
	const { t } = useTranslation()
	const [rolledUp, setRolledUp] = useState<boolean>(true)

	const handlerRollUp = () => {
		setRolledUp((prev) => !prev)
	}

	return (
		<div
			className={classNames(clx.sidebar, { [clx.rolledUp]: rolledUp }, [])}
			data-testid="sidebar"
		>
			<div className={clx.inner}>
				<AppButton
					data-testid={"sidebar-toggle"}
					theme={AppButtonTheme.clear}
					onClick={handlerRollUp}
				>
					{t("rollup")}
				</AppButton>
			</div>
			<div className={clx.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	)
}
