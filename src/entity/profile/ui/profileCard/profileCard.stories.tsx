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
		nikname: "uui",
		country: Country.Russia,
		avatar: "https://o.dns-shop.ru/original/st1/a6a5b4a5a83a1a56a3d36ac8fe81f4de/4eedf72c78d00c0cc4442927754b11e6c52e9eebf95bc25575ab4e6f0b4d963f.jpg",
		currency: Currency.USD,
	},
	decorators: [ThemeDecorator(Theme.darkTheme), RouterDecorator],
}
