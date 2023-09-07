import { rtkApi } from "shared/api/rtk"
import { Notification } from "../type/Notification"

const getNotifications = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		Notifications: build.query<Notification[], void>({
			query: () => "notifications",
		}),
	}),
	overrideExisting: false,
})

export const { useNotificationsQuery } = getNotifications
