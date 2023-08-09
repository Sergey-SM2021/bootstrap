import type { Meta, StoryObj } from "@storybook/react"
import { Avatar } from "./avatar"
import src from "shared/assets/avatar.jpg"

const meta: Meta<typeof Avatar> = {
	title: "Shared/Avatar",
	component: Avatar,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Avatar>;


export const Primary: Story = {
	args: {
		size:"md",
		src
	},
	decorators: [],
}

