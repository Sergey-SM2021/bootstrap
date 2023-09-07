import { LoginModal } from "features/login"
import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { Flex } from "shared/ui/Flex/Flex"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Logo } from "widgets/Logo"
import clx from "../../style/navbar.module.scss"

export const NotAuth = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { t } = useTranslation()

	const onToggle = useCallback(() => {
		setIsOpen((prev) => !prev)
	}, [])

	return (
		<Flex align="center" gap={32} className={clx.navbar}>
			{isOpen ? <LoginModal isOpen={isOpen} onClose={onToggle} /> : null}
			<Logo />
			<div className={clx.links}></div>
			<AppButton onClick={onToggle} theme={AppButtonTheme.clear}>
				{t("login")}
			</AppButton>
		</Flex>
	)
}
