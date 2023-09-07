import type { Meta, StoryObj } from "@storybook/react"
import { MyListbox } from "./Listbox"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof MyListbox> = {
	title: "Shared/MyListbox",
	component: MyListbox,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MyListbox>;

export const Dark: Story = {
	args: {
		items: [
			{
				id: 1,
				name: "Москва",
			},
			{
				id: 2,
				name: "Париж",
			},
			{
				id: 3,
				name: "Берлин",
			},
		],
		onSelect(value) {
			alert(value)
		},
		value: {
			id: 1,
			name: "Москва",
		},
	},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}
