import { DeepPartial } from "@reduxjs/toolkit"
import { StoryFn } from "@storybook/react"
import { ReduxProvider } from "app/providers/ReduxProvider"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

// eslint-disable-next-line
export const ReduxDecorator = (store?: DeepPartial<StoreSchema>) => (Story: StoryFn) =>
	(
		<ReduxProvider initialStore={store}>
			<Story />
		</ReduxProvider>
	)
