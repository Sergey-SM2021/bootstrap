import type { Meta, StoryObj } from "@storybook/react"
import { AppLink, linkTheme } from "./appLink"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof AppLink> = {
	title: "Shared/AppLink",
	component: AppLink,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AppLink>;

export const Dark: Story = {
	args: {
		children: "AppLink",
		theme: linkTheme.primary,
	},
	decorators: [RouterDecorator, ThemeDecorator(Theme.darkTheme)],
}

export const Light: Story = {
	args: {
		children: "AppLink",
		theme: linkTheme.primary,
	},
	decorators: [RouterDecorator, ThemeDecorator(Theme.lightTheme)],
}

export const Primary: Story = {
	args: {
		children: "AppLink",
		theme: linkTheme.primary,
	},
	decorators: [RouterDecorator, ThemeDecorator(Theme.lightTheme)],
}

export const Secondary: Story = {
	args: {
		children: "AppLink",
		theme: linkTheme.secondary,
	},
	decorators: [RouterDecorator, ThemeDecorator(Theme.lightTheme)],
}

export const InvertedPrimary: Story = {
	args: {
		children: "AppLink",
		theme: linkTheme.invertedPrimary,
	},
	decorators: [RouterDecorator, ThemeDecorator(Theme.lightTheme)],
}

export const IinvertedSecondary: Story = {
	args: {
		children: "AppLink",
		theme: linkTheme.invertedSecondary,
	},
	decorators: [RouterDecorator, ThemeDecorator(Theme.lightTheme)],
}
