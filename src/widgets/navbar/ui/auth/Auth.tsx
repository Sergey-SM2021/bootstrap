import { Suspense, memo, useCallback, useMemo } from "react"
import { Flex } from "shared/ui/Flex/Flex"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { MyDropdown } from "shared/ui/menu/Dropdown"
import { Logo } from "widgets/Logo"
import { RouterPaths } from "shared/config/routerConfig/RouterConfig"
import { useNavigate } from "react-router-dom"
import { logout } from "entity/user/model/slice/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import clx from "../../style/navbar.module.scss"
import * as userSelector from "entity/user/model/selector/getUser"
import { Avatar } from "shared/ui/avatar/avatar"
import { Role } from "entity/user/model/const/user"
import { Icon } from "shared/ui/icon/Icon"
import Notifications from "shared/assets/notifications.svg"
import { MyPopover } from "shared/ui/menu/popover/ui/Popover"
import { NotificationsList } from "entity/Notifications"
import { Spinner } from "shared/ui/spinner"

export const Auth = memo(() => {
	const nav = useNavigate()
	const dispatch = useDispatch()
	const { t } = useTranslation()
	const currrentUserId = useSelector(userSelector.getUserId)
	const userAvatar = useSelector(userSelector.getUserAvatar)
	const userRole = useSelector(userSelector.getUserRole)

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
			<MyPopover
				trigger={
					<Icon>
						<Notifications />
					</Icon>
				}
			>
				<Suspense fallback={<Spinner />}>
					<NotificationsList />
				</Suspense>
			</MyPopover>
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
