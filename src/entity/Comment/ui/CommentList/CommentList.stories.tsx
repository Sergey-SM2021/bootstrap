import type { Meta, StoryObj } from "@storybook/react"
import { CommentList } from "./CommentList"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import avatar from "shared/assets/assasyn.jpg"
import { Citys } from "entity/City/model/types/CitySchema"
import { Country, Currency } from "shared/const/common"

const meta: Meta<typeof CommentList> = {
	title: "Entity/CommentList",
	component: CommentList,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof CommentList>;

const comments = [
	{
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
	{
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
]

export const Dark: Story = {
	args: {
		comments,
		isLoading: false,
	},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}

export const Pending: Story = {
	args: {
		comments,
		isLoading: true,
	},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}

export const NotFound: Story = {
	args: {
		comments:[],
		isLoading: false,
	},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}

export const Error: Story = {
	args: {
		comments,
		isLoading: false,
		error:"Error occurred"
	},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}
