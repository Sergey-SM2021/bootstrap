import type { Meta, StoryObj } from "@storybook/react"
import ProfilePage from "./ProfilePage"
import { RouterDecorator } from "shared/config/storybook/decorators/routerDecorator"
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { ReduxDecorator } from "shared/config/storybook/decorators/reduxDecorator"
import { Citys } from "entity/City/model/types/CitySchema"
import { Country, Currency } from "shared/const/common"

const meta: Meta<typeof ProfilePage> = {
	title: "Pages/ProfilePage",
	component: ProfilePage,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ProfilePage>;

export const Dark: Story = {
	decorators: [
		RouterDecorator(),
		ThemeDecorator(Theme.darkTheme),
		ReduxDecorator({
			profile: {
				error: "",
				readOnly: true,
				data: {
					profile: {
						name: "",
						lastname: "",
						age: 22,
						city: Citys.Moscow,
						nikname: "",
						country: Country.Russia,
						avatar: "",
						currency: Currency.USD,
					},
					editedProfile: {
						name: "",
						lastname: "",
						age: 22,
						city: Citys.Moscow,
						nikname: "",
						country: Country.Russia,
						avatar: "",
						currency: Currency.USD,
					},
				},
				profileValidateErrors: [],
				isLoading: false,
			},
		}),
	],
}
