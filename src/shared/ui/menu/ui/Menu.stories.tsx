import type { Meta, StoryFn, StoryObj } from "@storybook/react"
import Profile from "shared/assets/profile.svg"
import { MyDropdown } from "./Menu"

const meta: Meta<typeof MyDropdown> = {
	title: "Shared/MyDropdown",
	component: MyDropdown,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MyDropdown>;

export const Default: Story = {
	decorators: [
		(Story: StoryFn) => (
			<div className="dark-theme">
				<Story />
			</div>
		),
	],
	args: {
		Trigger: <Profile />,
		items: [
			{
				text: "string",
				onClick: () => {
					alert("JKJKJ")
				},
			},
		],
		right: 0,
		top: "100%"
	},
}
