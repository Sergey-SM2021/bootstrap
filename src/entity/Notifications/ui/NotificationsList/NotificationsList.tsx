import { useNotificationsQuery } from "entity/Notifications/model/api/getNotifications"
import { memo } from "react"
import { NotificationsItem } from "../NotificationsItem/NotificationItem"
import clx from "./NotificationsList.module.scss"
import { Flex } from "shared/ui/Flex/Flex"

const NotificationsList = memo(() => {
	const { data } = useNotificationsQuery()
	return (
		<Flex className={clx.list} direction="column" gap={16}>
			{data?.map((el, index) => (
				<NotificationsItem message={el} key={index} />
			))}
		</Flex>
	)
})

export default NotificationsList