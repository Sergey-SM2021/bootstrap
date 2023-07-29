import { useCallback, useState } from "react"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import clx from "./Sidebar.module.scss"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { ThemeSwitcher } from "widgets/themeSwitcher"
import { LangSwitcher } from "widgets/langSwitcher"
import { AppButtonSize } from "shared/ui/appButton/ui/appButton"
import { useTranslation } from "react-i18next"
import { SidebarItem } from "../SidebarItem/SidebarItem"
import { links } from "../../model/SidebarLinks"

export const Sidebar = () => {
	const [rolledUp, setRolledUp] = useState<boolean>(true)
	const { t } = useTranslation()

	const handlerRollUp = useCallback(() => {
		setRolledUp((prev) => !prev)
	}, [])

	return (
		<div
			className={classNames(clx.sidebar, { [clx.rolledUp]: rolledUp }, [])}
			data-testid="sidebar"
		>
			<AppButton
				className={clx.buttonRolledUp}
				data-testid={"sidebar-toggle"}
				theme={AppButtonTheme.background_inverted}
				onClick={handlerRollUp}
				square={true}
				size={AppButtonSize.xl}
			>
				{rolledUp ? ">" : "<"}
			</AppButton>
			<div className={clx.inner}>
				<div className={clx.links}>
					{links.map((el) => (
						<SidebarItem
							{...el}
							key={el.path}
							text={t(el.text)}
							rolledUp={rolledUp}
						/>
					))}
				</div>
			</div>
			<div className={clx.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={!rolledUp} />
			</div>
		</div>
	)
}
