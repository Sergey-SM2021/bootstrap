import type { Meta, StoryObj } from "@storybook/react"
import { RateArticle } from "./RateArticle.async"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { ReduxDecorator } from "shared/config/storybook/decorators/reduxDecorator"

const meta: Meta<typeof RateArticle> = {
	title: "Feature/RateArticle",
	component: RateArticle,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RateArticle>;

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.darkTheme), ReduxDecorator()],
}