import type { Meta, StoryObj } from "@storybook/react"

import { Sidebar } from "./Sidebar"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ReduxDecorator } from "shared/config/storybook/decorators/reduxDecorator"

const meta: Meta<typeof Sidebar> = {
	title: "Widget/Sidebar",
	component: Sidebar,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Sidebar>;

export const Authorized: Story = {
	args: {},
	decorators: [
		ThemeDecorator(Theme.darkTheme),
		RouterDecorator(),
		ReduxDecorator({
			user: {
				data: {
					id: "9",
				},
			},
		}),
	],
}

export const NotAuthorized: Story = {
	args: {},
	decorators: [
		ThemeDecorator(Theme.darkTheme),
		RouterDecorator(),
		ReduxDecorator(),
	],
}
