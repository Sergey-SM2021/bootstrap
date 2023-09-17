import { memo, useCallback, useMemo } from "react"
import { Flex } from "shared/ui/Flex/Flex"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { MyDropdown } from "shared/ui/menu/Dropdown"
import { Logo } from "widgets/Logo"
import { useNavigate } from "react-router-dom"
import { actions, userSelectors, Role } from "entity/user"
import { Notifications } from "features/notifications"
import { Avatar } from "shared/ui/avatar/avatar"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import clx from "../../style/navbar.module.scss"
import { GetRouter } from "shared/const/router"

export const Auth = memo(() => {
	const nav = useNavigate()
	const dispatch = useDispatch()
	const { t } = useTranslation()
	const currrentUserId = useSelector(userSelectors.getUserId)
	const userAvatar = useSelector(userSelectors.getUserAvatar)
	const userRole = useSelector(userSelectors.getUserRole)

	const handlerCreatePost = useCallback(() => {
		nav(GetRouter.NewArticle())
	}, [nav])

	const handlerNavgate = useCallback(() => {
		nav(GetRouter.Profile(currrentUserId as string))
	}, [nav, currrentUserId])

	const handlerAnalyticsNavgate = useCallback(() => {
		nav("/analytics")
	}, [nav])

	const logoutHandler = useCallback(async () => {
		dispatch(actions.logout())
	}, [dispatch])

	const links = useMemo(
		() =>
			[
				{ onClick: logoutHandler, text: t("logout") },
				{ onClick: handlerNavgate, text: t("profile") },
				userRole === Role.admin && {
					onClick: handlerAnalyticsNavgate,
					text: t("analytics"),
				},
			].filter(Boolean),
		[logoutHandler, handlerNavgate, handlerAnalyticsNavgate, t, userRole]
	)

	return (
		<Flex align="center" gap={32} className={clx.navbar}>
			<Logo />
			<AppButton onClick={handlerCreatePost} theme={AppButtonTheme.primary}>
				{t("create post")}
			</AppButton>
			<div className={clx.links}></div>
			<Notifications />
			<MyDropdown
				Trigger={<Avatar src={userAvatar} size="xs" />}
				// @ts-ignore
				items={links}
				top={"100%"}
				right={0}
			/>
		</Flex>
	)
})
