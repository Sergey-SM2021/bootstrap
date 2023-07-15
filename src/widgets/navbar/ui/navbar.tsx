import { classNames } from "shared/lib/helpers/classNames/classNames"
import cls from "./navbar.module.scss"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { useCallback, useState } from "react"
import { Modal } from "shared/ui/Modal/Modal"
import { useTranslation } from "react-i18next"

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const { t } = useTranslation()

	const onToggle = useCallback(() => {
		setIsOpen((prev) => !prev)
	}, [])

	return (
		<div className={classNames(className, {}, [cls.navbar])}>
			<Modal isOpen={isOpen} onClose={onToggle}>
				{t("modal")}
			</Modal>
			<div className={cls.links}></div>
			<AppButton onClick={onToggle} theme={AppButtonTheme.clear}>
				{t("login")}
			</AppButton>
		</div>
	)
}
