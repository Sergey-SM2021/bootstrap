import type { Meta, StoryObj } from "@storybook/react"

import { Text, TextSize, ThemeEnum } from "./Text"

const meta: Meta<typeof Text> = {
	title: "Shared/Text",
	component: Text,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
	args:{
		children:"text"
	}
}

export const Error: Story = {
	args:{
		theme: ThemeEnum.Error,
		children:"text"
	}
}

export const Small: Story = {
	args:{
		children:"text",
		size: TextSize.sm
	}
}

export const Medium: Story = {
	args:{
		size: TextSize.md,
		children:"text"
	}
}

export const Large: Story = {
	args:{
		size: TextSize.lg,
		children:"text"
	}
}


export const XL: Story = {
	args:{
		size: TextSize.xl,
		children:"text"
	}
}

export const XXL: Story = {
	args:{
		size: TextSize.xxl,
		children:"text"
	}
}
