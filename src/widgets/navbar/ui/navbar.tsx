import { classNames } from "shared/lib/helpers/classNames/classNames"
import cls from "./navbar.module.scss"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { memo, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { LoginModal } from "features/login"
import { useDispatch, useSelector } from "react-redux"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { logout } from "entity/user/model/slice/userSlice"

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className = "" }: NavbarProps) => {
	const selector = useSelector((state: StoreSchema) => state.user.authData)
	const [isOpen, setIsOpen] = useState(false)
	const dispatch = useDispatch()
	const { t } = useTranslation()

	const logoutHandler = useCallback(async () => {
		dispatch(logout())
	}, [dispatch])

	const onToggle = useCallback(() => {
		setIsOpen((prev) => !prev)
	}, [])

	if (selector) {
		return (
			<div className={classNames(className, {}, [cls.navbar])}>
				<div className={cls.links}></div>
				<AppButton onClick={logoutHandler} theme={AppButtonTheme.clear}>
					{t("logout")}
				</AppButton>
			</div>
		)
	}

	return (
		<div className={classNames(className, {}, [cls.navbar])}>
			{isOpen ? <LoginModal isOpen={isOpen} onClose={onToggle} /> : null}
			<div className={cls.links}></div>	
			<AppButton onClick={onToggle} theme={AppButtonTheme.clear}>
				{t("login")}
			</AppButton>
		</div>
	)
})

Navbar.displayName = "Navbar"
