import type { Meta, StoryObj } from "@storybook/react"
import { ArticleItemSkeleton } from "./ArticleItemSkeleton"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"

const meta: Meta<typeof ArticleItemSkeleton> = {
	title: "Entity/ArticleItemSkeleton",
	component: ArticleItemSkeleton,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ArticleItemSkeleton>;

export const Small: Story = {
	args: {
		mode: "small",
	},
	decorators: [RouterDecorator()],
}

export const Big: Story = {
	args: {
		mode: "big",
	},
	decorators: [RouterDecorator()],
}
