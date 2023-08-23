import type { Meta, StoryObj } from "@storybook/react"
import { ArticleItem } from "./ArticleItem"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { ArticleLabel } from "entity/Article/model/types/Article"

const meta: Meta<typeof ArticleItem> = {
	title: "Entity/ArticleItem",
	component: ArticleItem,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ArticleItem>;

export const Big: Story = {
	args: {
		mode: "big",
	},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}

export const Small: Story = {
	args: {
		label: [ArticleLabel.IT, ArticleLabel.ECONOMICS, ArticleLabel.MEDICINE, ArticleLabel.ECONOMICS],
		mode: "small",
		createdAt: "01.29.3210",
		img: "https://upload.wikimedia.org/wikipedia/ru/2/26/AC_Valhalla_standard_edition.jpg",
		title: "Assasyn creed valhalla",
		views: 210
	},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}
