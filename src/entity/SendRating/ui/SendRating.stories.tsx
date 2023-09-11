import type { Meta, StoryObj } from "@storybook/react"

import { SendRating } from "./SendRating"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof SendRating> = {
	title: "Entity/SendRating",
	component: SendRating,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SendRating>;

export const Primary: Story = {
	decorators: [ThemeDecorator(Theme.lightTheme)],
	args: {
		title: "Оставьте комментарий",
		onSend: (message, rating) => {
			console.log(message, rating)
		},
	},
}
