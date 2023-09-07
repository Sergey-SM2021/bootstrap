import type { Meta, StoryObj } from "@storybook/react"
import { Navbar } from "./navbar"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { ReduxDecorator } from "shared/config/storybook/decorators/reduxDecorator"

const meta: Meta<typeof Navbar> = {
	title: "Widget/Navbar",
	component: Navbar,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Navbar>;

export const Dark: Story = {
	decorators: [
		RouterDecorator(),
		ReduxDecorator(),
		ThemeDecorator(Theme.darkTheme),
	],
}

export const Logined: Story = {
	decorators: [
		RouterDecorator(),
		ReduxDecorator({ user: { data: {id:"8"} } }),
		ThemeDecorator(Theme.lightTheme),
	],
}
