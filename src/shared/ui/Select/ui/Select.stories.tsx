import type { Meta, StoryObj } from "@storybook/react"

import { SelectStorybook } from "./Select"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof SelectStorybook> = {
	title: "Shared/SelectStorybook",
	component: SelectStorybook,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SelectStorybook>;

export const Primary: Story = {
	args:{
		placeholder: "Select"
	},
	decorators: [ThemeDecorator(Theme.lightTheme)],
}
