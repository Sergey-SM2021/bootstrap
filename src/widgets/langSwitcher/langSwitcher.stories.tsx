import type { Meta, StoryObj } from "@storybook/react"
import { LangSwitcher } from "./langSwitcher"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof LangSwitcher> = {
	title: "Widget/LangSwitcher",
	component: LangSwitcher,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof LangSwitcher>;

export const Dark: Story = {
	decorators: [RouterDecorator, ThemeDecorator(Theme.darkTheme)],
}

export const Light: Story = {
	decorators: [RouterDecorator, ThemeDecorator(Theme.lightTheme)],
}

export const Primary: Story = {
	decorators: [RouterDecorator, ThemeDecorator(Theme.lightTheme)],
}
