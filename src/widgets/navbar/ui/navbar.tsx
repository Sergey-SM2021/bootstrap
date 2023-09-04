import { classNames } from "shared/lib/helpers/classNames/classNames"
import cls from "./navbar.module.scss"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { memo, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { LoginModal } from "features/login"
import { useDispatch, useSelector } from "react-redux"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { logout } from "entity/user/model/slice/userSlice"
import { useNavigate } from "react-router-dom"
import { RouterPaths } from "shared/config/routerConfig/RouterConfig"
import { Flex } from "shared/ui/Flex/Flex"
import { Logo } from "widgets/Logo"

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className = "" }: NavbarProps) => {
	const selector = useSelector((state: StoreSchema) => state.user.authData)
	const [isOpen, setIsOpen] = useState(false)
	const dispatch = useDispatch()
	const { t } = useTranslation()
	const nav = useNavigate()

	const logoutHandler = useCallback(async () => {
		dispatch(logout())
	}, [dispatch])

	const onToggle = useCallback(() => {
		setIsOpen((prev) => !prev)
	}, [])

	const handlerCreatePost = () => {
		nav(RouterPaths.article_create)
	}

	if (selector) {
		return (
			<Flex
				align="center"
				gap={32}
				className={classNames(className, {}, [cls.navbar])}
			>
				<Logo />
				<AppButton onClick={handlerCreatePost} theme={AppButtonTheme.primary}>
					{t("create post")}
				</AppButton>
				<div className={cls.links}></div>
				<AppButton onClick={logoutHandler} theme={AppButtonTheme.clear}>
					{t("logout")}
				</AppButton>
			</Flex>
		)
	}

	return (
		<Flex
			align="center"
			gap={32}
			className={classNames(className, {}, [cls.navbar])}
		>
			{isOpen ? <LoginModal isOpen={isOpen} onClose={onToggle} /> : null}
			<Logo />
			<div className={cls.links}></div>
			<AppButton onClick={onToggle} theme={AppButtonTheme.clear}>
				{t("login")}
			</AppButton>
		</Flex>
	)
})
