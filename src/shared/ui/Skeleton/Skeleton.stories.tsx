import type { Meta, StoryObj } from "@storybook/react"

import { Skeleton } from "./Skeleton"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof Skeleton> = {
	title: "Shared/Skeleton",
	component: Skeleton,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Skeleton>;

export const Dark: Story = {
	args: {
		width: "100%",
		height: 100
	},
	decorators: [ThemeDecorator(Theme.lightTheme)]
}

export const Circle: Story = {
	args: {
		height: 100,
		width: 100,
		radius: "50%"
	},
	decorators: [ThemeDecorator(Theme.lightTheme)]
}