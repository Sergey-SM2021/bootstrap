import { CssDecorator } from "../../src/shared/config/storybook/decorators/cssDecorator"
import type { Preview } from "@storybook/react"

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		themes: {
			default: "light",
			list: [
				{ name: "light", class: "light-theme", color: "#fff" },
				{ name: "dark", class: "dark-theme", color: "#000" },
				{ name: "custom", class: "custom-theme", color: "#3b5998" },
			],
		},
	},
	decorators: [CssDecorator],
}

export default preview
