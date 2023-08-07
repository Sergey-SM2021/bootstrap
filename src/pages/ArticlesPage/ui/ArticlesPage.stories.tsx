import type { Meta, StoryObj } from "@storybook/react"
import ArticlePage from "./FTName"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof FTName> = {
	title: "Entity/ArticlePage",
	component: FTName,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FTName>;

export const Dark: Story = {
	args: {},
	decorators: [RouterDecorator, ThemeDecorator(Theme.darkTheme)],
}

export const Light: Story = {
	args: {},
	decorators: [RouterDecorator, ThemeDecorator(Theme.lightTheme)],
}
