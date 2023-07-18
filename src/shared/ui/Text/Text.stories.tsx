import type { Meta, StoryObj } from "@storybook/react"

import { Text } from "./Text"

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
