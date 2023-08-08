import type { Meta, StoryObj } from "@storybook/react"

import { Article } from "./Article"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { ReduxDecorator } from "shared/config/storybook/decorators/reduxDecorator"

const meta: Meta<typeof Article> = {
	title: "Entity/Article",
	component: Article,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Article>;

export const Error: Story = {
	args: {
		id: 67
	},
	decorators: [ThemeDecorator(Theme.darkTheme), ReduxDecorator({ArticleReducer:{error:"cannot get Article"}})],
}

export const Pending: Story = {
	args: {
		id: 67
	},
	decorators: [ThemeDecorator(Theme.darkTheme), ReduxDecorator({ArticleReducer:{isLoading: true}})],
}

export const Fulefilled: Story = {
	args: {
		id: 67
	},
	decorators: [ThemeDecorator(Theme.darkTheme), ReduxDecorator({ArticleReducer:{data:{
		title:"Hello"
	}}})],
}
