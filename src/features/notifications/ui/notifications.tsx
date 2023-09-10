import { NotificationsList } from "entity/Notifications"
import { Suspense, memo, useCallback, useState } from "react"
import { BrowserView } from "react-device-detect"
import { Icon } from "shared/ui/icon/Icon"
import { MyPopover } from "shared/ui/menu/popover/ui/Popover"
import { Spinner } from "shared/ui/spinner"
import { MobileView } from "react-device-detect"
import { Drawer } from "shared/ui/Drawer"
import NotificationsIcon from "shared/assets/notifications.svg"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import clx from "./notifications.module.scss"

export const Notifications = memo(() => {
	const [isOpen, setIsOpen] = useState(false)

	const handlerOpenDrawer = useCallback(() => {
		setIsOpen(true)
	}, [])

	const handlerClose = useCallback(() => {
		setIsOpen(false)
	}, [])

	const button = (
		<Icon>
			<NotificationsIcon />
		</Icon>
	)

	return (
		<div>
			<MobileView>
				<AppButton onClick={handlerOpenDrawer} theme={AppButtonTheme.clear}>
					{button}
				</AppButton>
				<Drawer isOpen={isOpen} onClose={handlerClose}>
					<Suspense fallback={<Spinner />}>
						<NotificationsList />
					</Suspense>
				</Drawer>
			</MobileView>
			<BrowserView>
				<MyPopover trigger={button}>
					<Suspense fallback={<Spinner />}>
						<NotificationsList />
					</Suspense>
				</MyPopover>
			</BrowserView>
		</div>
	)
})
