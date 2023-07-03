import type { Meta, StoryObj } from "@storybook/react"

import { AppButton, AppButtonTheme } from "./appButton"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof AppButton> = {
	title: "Shared/AppButton",
	component: AppButton,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AppButton>;

export const Dark: Story = {
	args: {
		theme: AppButtonTheme.primary,
		children: "Кнопка",
	},
	decorators: [ThemeDecorator(Theme.darkTheme)],
}

export const Light: Story = {
	args: {
		theme: AppButtonTheme.primary,
		children: "Кнопка",
	},
	decorators: [ThemeDecorator(Theme.lightTheme)],
}

export const Clear: Story = {
	args: {
		theme: AppButtonTheme.clear,
		children: "Кнопка",
	},
	decorators: [ThemeDecorator(Theme.lightTheme)],
}
