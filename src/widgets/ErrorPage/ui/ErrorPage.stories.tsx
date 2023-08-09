import type { Meta, StoryObj } from "@storybook/react"
import { ErrorPage } from "./ErrorPage"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof ErrorPage> = {
	title: "Widget/ErrorPage",
	component: ErrorPage,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ErrorPage>;

export const Dark: Story = {
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}

export const Light: Story = {
	decorators: [RouterDecorator(), ThemeDecorator(Theme.lightTheme)],
}

export const Primary: Story = {
	decorators: [RouterDecorator(), ThemeDecorator(Theme.lightTheme)],
}
