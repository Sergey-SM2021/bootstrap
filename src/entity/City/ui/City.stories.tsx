import type { Meta, StoryObj } from "@storybook/react"
import { City } from "./City"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof City> = {
	title: "Entity/City",
	component: City,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof City>;

export const Dark: Story = {
	args: {
		citys: [
			{ id: 7, name: "Токио" },
			{ id: 5, name: "Берлин" },
			{ id: 1, name: "Анапа" },
		],
		onChange(value) {
			alert(JSON.stringify(value))
		},
		value: {
			id: 7,
			name: "Анапа",
		},
	},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}