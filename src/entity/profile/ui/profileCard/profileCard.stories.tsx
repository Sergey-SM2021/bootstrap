import type { Meta, StoryObj } from "@storybook/react"

import { ProfileCard } from "./profileCard"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { Citys } from "entity/City/model/types/CitySchema"
import { Country, Currency } from "shared/const/common"

const meta: Meta<typeof ProfileCard> = {
	title: "Entity/ProfileCard",
	component: ProfileCard,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ProfileCard>;

export const Dark: Story = {
	args: {
		name: "dfcf",
		lastname: "pijuibjv",
		age: 22,
		city: Citys.Moscow,
		nickname: "uui",
		country: Country.Russia,
		avatar:"",
		currency: Currency.USD,
	},
	decorators: [ThemeDecorator(Theme.darkTheme), RouterDecorator()],
}
