import type { Meta, StoryObj } from "@storybook/react"
import { Navbar } from "./navbar"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof Navbar> = {
	title: "Widget/Navbar",
	component: Navbar,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Navbar>;

export const Dark: Story = {
	decorators: [RouterDecorator, ThemeDecorator(Theme.darkTheme)],
}

export const Light: Story = {
	decorators: [RouterDecorator, ThemeDecorator(Theme.lightTheme)],
}

export const Primary: Story = {
	decorators: [RouterDecorator, ThemeDecorator(Theme.lightTheme)],
}
