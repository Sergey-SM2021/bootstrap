import type { Meta, StoryObj } from "@storybook/react"

import { ProfileCard } from "./profileCard"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"

const meta: Meta<typeof ProfileCard> = {
	title: "Entity/ProfileCard",
	component: ProfileCard,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ProfileCard>;

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.darkTheme), RouterDecorator()],
}
