import type { Meta, StoryObj } from "@storybook/react"
import ProfilePage from "./ProfilePage"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof ProfilePage> = {
	title: "Pages/ProfilePage",
	component: ProfilePage,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ProfilePage>;

export const Dark: Story = {
	args: {},
	decorators: [RouterDecorator, ThemeDecorator(Theme.darkTheme)],
}

export const Light: Story = {
	args: {},
	decorators: [RouterDecorator, ThemeDecorator(Theme.lightTheme)],
}
