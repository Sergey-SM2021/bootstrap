import type { Meta, StoryObj } from "@storybook/react"

import { Text, ThemeEnum } from "./Text"

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
