import type { Meta, StoryObj } from "@storybook/react"

import { AppButton, AppButtonSize, AppButtonTheme } from "./appButton"
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

export const Square: Story = {
	args: {
		children: ">",
		square: true,
	},
	decorators: [ThemeDecorator(Theme.lightTheme)],
}

export const SquareL: Story = {
	args: {
		children: ">",
		square: true,
		size: AppButtonSize.lg,
	},
	decorators: [ThemeDecorator(Theme.lightTheme)],
}

export const SquareXL: Story = {
	args: {
		children: ">",
		square: true,
		size: AppButtonSize.xl,
	},
	decorators: [ThemeDecorator(Theme.lightTheme)],
}

export const BackgroundInverted: Story = {
	args: {
		theme: AppButtonTheme.background_inverted,
		children: "Кнопка",
	},
	decorators: [ThemeDecorator(Theme.lightTheme)],
}

export const MD: Story = {
	args: {
		theme: AppButtonTheme.primary,
		children: "Кнопка",
		size: AppButtonSize.md
	},
	decorators: [ThemeDecorator(Theme.lightTheme)],
}

export const LG: Story = {
	args: {
		theme: AppButtonTheme.primary,
		children: "Кнопка",
		size: AppButtonSize.lg
	},
	decorators: [ThemeDecorator(Theme.lightTheme)],
}

export const XL: Story = {
	args: {
		theme: AppButtonTheme.primary,
		children: "Кнопка",
		size: AppButtonSize.xl
	},
	decorators: [ThemeDecorator(Theme.lightTheme)],
}

export const Disabled: Story = {
	args: {
		theme: AppButtonTheme.primary,
		children: "disabled",
		size: AppButtonSize.xl,
		disabled: true
	},
	decorators: [ThemeDecorator(Theme.lightTheme)],
}


