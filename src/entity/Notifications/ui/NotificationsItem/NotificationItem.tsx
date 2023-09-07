import { memo } from "react"
import clx from "./NotificationItem.module.scss"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Flex } from "shared/ui/Flex/Flex"
import { useTranslation } from "react-i18next"

interface NotificationsItemProps {
  message: string;
}

export const NotificationsItem = memo((props: NotificationsItemProps) => {
	const { t } = useTranslation()
	const { message } = props
	return (
		<Flex direction="column" gap={8} className={clx.item}>
			<div className={clx.content}>{message}</div>
			<AppButton theme={AppButtonTheme.background_inverted}>
				{t("Открыть")}
			</AppButton>
		</Flex>
	)
})
