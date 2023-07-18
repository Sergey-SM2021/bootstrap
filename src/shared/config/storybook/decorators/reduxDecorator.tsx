import { StoryFn } from "@storybook/react"
import { ReduxProvider } from "app/providers/ReduxProvider"

export const ReduxDecorator = (Story:StoryFn) => <ReduxProvider>
	<Story />
</ReduxProvider>