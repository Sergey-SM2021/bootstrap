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


export const Default: Story = {
	args: {
		size:"md",
		src
	},
	decorators: [],
}

export const Small: Story = {
	args: {
		size:"sm",
		src
	},
	decorators: [],
}

export const ExtraSmall: Story = {
	args: {
		size:"xs",
		src
	},
	decorators: [],
}

