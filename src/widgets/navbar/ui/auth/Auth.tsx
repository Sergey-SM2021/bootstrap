import { memo, useCallback } from "react"
import { Flex } from "shared/ui/Flex/Flex"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { MyDropdown } from "shared/ui/menu"
import { Logo } from "widgets/Logo"
import Profile from "shared/assets/profile.svg"
import { RouterPaths } from "shared/config/routerConfig/RouterConfig"
import { useNavigate } from "react-router-dom"
import { logout } from "entity/user/model/slice/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import clx from "../../style/navbar.module.scss"
import { getUser } from "entity/user/model/selector/getUserSelector"

export const Auth = memo(() => {
	const nav = useNavigate()
	const dispatch = useDispatch()
	const { t } = useTranslation()
	const currrentUserId = useSelector(getUser)?.id

	const handlerCreatePost = useCallback(() => {
		nav(RouterPaths.article_create)
	}, [nav])

	const handlerNavgate = useCallback(() => {
		nav(`${RouterPaths.profile}${currrentUserId}`)
	}, [nav, currrentUserId])

	const handlerAnalyticsNavgate = useCallback(() => {
		nav("/analytics")
	}, [nav])

	const logoutHandler = useCallback(async () => {
		dispatch(logout())
	}, [dispatch])

	return (
		<Flex align="center" gap={32} className={clx.navbar}>
			<Logo />
			<AppButton onClick={handlerCreatePost} theme={AppButtonTheme.primary}>
				{t("create post")}
			</AppButton>
			<div className={clx.links}></div>
			<MyDropdown
				Trigger={<Profile />}
				items={[
					{ onClick: logoutHandler, text: t("logout") },
					{ onClick: handlerNavgate, text: t("profile") },
					{ onClick: handlerAnalyticsNavgate, text: t("analytics") },
				]}
				top={"100%"}
				right={0}
			/>
		</Flex>
	)
})
