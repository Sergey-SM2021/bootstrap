import { classNames } from "shared/lib/helpers/classNames/classNames"
import cls from "./navbar.module.scss"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { LoginModal } from "features/login"

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
			<LoginModal isOpen={isOpen} onClose={onToggle}/>
			<div className={cls.links}></div>
			<AppButton onClick={onToggle} theme={AppButtonTheme.clear}>
				{t("login")}
			</AppButton>
		</div>
	)
}
