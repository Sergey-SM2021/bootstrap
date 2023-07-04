import { useState } from "react"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import clx from "./Sidebar.module.scss"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { ThemeSwitcher } from "widgets/themeSwitcher"
import { LangSwitcher } from "widgets/langSwitcher/langSwitcher"
import { AppButtonSize } from "shared/ui/appButton/ui/appButton"
import { AppLink } from "shared/ui/appLink"
import { useTranslation } from "react-i18next"
import { RouterPaths } from "shared/config/routerConfig/RouterConfig"
import About from "../../assets/Description.svg"
import Home from "../../assets/Home.svg"

export const Sidebar = () => {
	const [rolledUp, setRolledUp] = useState<boolean>(true)
	const { t } = useTranslation()

	const links = [
		{ icon: <About />, path: RouterPaths.about, text: t("about link") },
		{ icon: <Home />, path: RouterPaths.home, text: t("home link") },
	]

	const handlerRollUp = () => {
		setRolledUp((prev) => !prev)
	}

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
						<div key={el.path} className={clx.link}>
							<AppLink to={el.path} className={clx.link}>
								{!rolledUp ? el.text : null}
								<span className={clx.icon}>{el.icon}</span>
							</AppLink>
						</div>
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
