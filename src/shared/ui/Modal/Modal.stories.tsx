import type { Meta, StoryFn, StoryObj } from "@storybook/react"

import { Modal } from "./Modal"

const meta: Meta<typeof Modal> = {
	title: "Shared/Modal",
	component: Modal,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
	args: {
		children: "yuyuyu",
		isOpen: true,
	},
	decorators: [
		(Story: StoryFn) => (
			<div className="light-theme">
				<Story />
			</div>
		),
	],
}

export const Dark: Story = {
	args: {
		children: "yuyuyu",
		isOpen: true,
	},
	decorators: [
		(Story: StoryFn) => (
			<div className="dark-theme">
				<Story />
			</div>
		),
	],
}
