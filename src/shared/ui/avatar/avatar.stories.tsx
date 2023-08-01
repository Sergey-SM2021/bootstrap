import type { Meta, StoryObj } from "@storybook/react"
import { Avatar } from "./avatar"

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
		src:"https://e1.pxfuel.com/desktop-wallpaper/155/648/desktop-wallpaper-an-epic-gallery-of-god-of-war-fan-art.jpg"
	},
	decorators: [],
}

