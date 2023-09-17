import type { Meta, StoryObj } from "@storybook/react"
import { Comment } from "./Comment"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import avatar from "shared/assets/assasyn.jpg"
import { Citys } from "entity/City"
import { Country, Currency } from "shared/const/common"

const meta: Meta<typeof Comment> = {
	title: "Entity/Comment",
	component: Comment,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Comment>;

export const Dark: Story = {
	args: {
		comment: {
			text: "I'm hero",
			user: {
				avatar,
				age: 2,
				city: Citys.Delhi,
				country: Country.Russia,
				currency: Currency.RUB,
				lastname: "Mormont",
				name: "John",
				nickname: "Всадник",
			},
			id: "8",
		},
		isLoading: false,
	},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}

export const Pending: Story = {
	args: {
		comment: {
			text: "I'm hero",
			user: {
				avatar,
				age: 2,
				city: Citys.Delhi,
				country: Country.Russia,
				currency: Currency.RUB,
				lastname: "Mormont",
				name: "John",
				nickname: "Всадник",
			},
			id: "8",
		},
		isLoading: true,
	},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}
