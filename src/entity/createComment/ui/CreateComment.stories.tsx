import type { Meta, StoryObj } from "@storybook/react"

import { CreateComment } from "./CreateComment"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof CreateComment> = {
	title: "Entity/CreateComment",
	component: CreateComment,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof CreateComment>;

export const Primary: Story = {
	args: {
		onChange(value) {
			alert(JSON.stringify(value))
		},
		onSubmit: () => {
			alert("add coment")
		},
		value: "default value",
	},
	decorators: [ThemeDecorator(Theme.darkTheme)],
}

export const Disabled: Story = {
	args: {
		onChange(value) {
			alert(JSON.stringify(value))
		},
		onSubmit: () => {
			alert("add coment")
		},
		value: "",
	},
	decorators: [ThemeDecorator(Theme.darkTheme)],
}
