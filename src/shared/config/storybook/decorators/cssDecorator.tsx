import { StoryFn } from "@storybook/react"

import "app/style/index.scss"

export const CssDecorator = (Story: StoryFn) => {
	return <Story />
}
