import { useNotificationsQuery } from "entity/Notifications"
import { memo } from "react"
import { NotificationsItem } from "../NotificationsItem/NotificationItem"
import { Flex } from "shared/ui/Flex/Flex"

interface NotificationsListProps {
  className?: string;
}

const NotificationsList = memo((props: NotificationsListProps) => {
	const { className = "" } = props
	const { data } = useNotificationsQuery()
	return (
		<Flex direction="column" className={className} gap={16}>
			{data?.map((el, index) => (
				<NotificationsItem message={el} key={index} />
			))}
		</Flex>
	)
})

export default NotificationsList
