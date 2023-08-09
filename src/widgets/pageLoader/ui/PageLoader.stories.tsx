import type { Meta, StoryObj } from "@storybook/react"
import { PageLoader } from "./PageLoader"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof PageLoader> = {
	title: "Widget/PageLoader",
	component: PageLoader,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof PageLoader>;

export const Dark: Story = {
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}

export const Light: Story = {
	decorators: [RouterDecorator(), ThemeDecorator(Theme.lightTheme)],
}

export const Primary: Story = {
	decorators: [RouterDecorator(), ThemeDecorator(Theme.lightTheme)],
}
