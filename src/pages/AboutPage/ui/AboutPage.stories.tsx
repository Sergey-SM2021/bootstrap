import type { Meta, StoryObj } from "@storybook/react"
import AboutPage from "./AboutPage"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof AboutPage> = {
	title: "Pages/AboutPage",
	component: AboutPage,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AboutPage>;

export const Dark: Story = {
	args: {},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}

export const Light: Story = {
	args: {},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.lightTheme)],
}

export const Primary: Story = {
	args: {},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.lightTheme)],
}
