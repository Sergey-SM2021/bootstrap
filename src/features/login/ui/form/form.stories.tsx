import type { Meta, StoryObj } from "@storybook/react"
import Form from "./Form"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { ReduxDecorator } from "shared/config/storybook/decorators/reduxDecorator"

const meta: Meta<typeof Form> = {
	title: "Feature/Form",
	component: Form,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Form>;

export const Dark: Story = {
	args: {},
	decorators: [
		RouterDecorator(),
		ThemeDecorator(Theme.darkTheme),
		ReduxDecorator(),
	],
}
