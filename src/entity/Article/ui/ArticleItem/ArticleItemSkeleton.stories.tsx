import type { Meta, StoryObj } from "@storybook/react"
import { ArticleItemSkeleton } from "./ArticleItemSkeleton"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"

const meta: Meta<typeof ArticleItemSkeleton> = {
	title: "Entity/ArticleItemSkeleton",
	component: ArticleItemSkeleton,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ArticleItemSkeleton>;

export const Small: Story = {
	args: {},
	decorators: [RouterDecorator(), ThemeDecorator(Theme.darkTheme)],
}
