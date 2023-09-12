import type { StorybookConfig } from "@storybook/react-webpack5"
import webpack from "webpack"

const config: StorybookConfig = {
	stories: ["../../src/**/*.stories.tsx"],
	addons: [
		"@storybook/addon-links",
		{
			name: "@storybook/addon-essentials",
			options: {
				backgrounds: false,
			},
		},
		"@storybook/addon-interactions",
		"storybook-addon-mock",
		"storybook-addon-themes",
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	webpackFinal(config, options) {
		const webpackConfig = config

		const imageRule = config.module?.rules?.find((rule) => {
			const test = (rule as { test: RegExp }).test

			if (!test) {
				return false
			}

			return test.test(".svg")
		}) as { [key: string]: any }

		imageRule.exclude = /\.svg$/

		webpackConfig.module?.rules?.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		})

		if (webpackConfig.module?.rules) {
			webpackConfig.module.rules = [
				...webpackConfig.module.rules,
				{
					test: /\.s[ac]ss$/i,
					use: [
						"style-loader",
						{
							loader: "css-loader",
							options: {
								modules: {
									auto: (resourcePath: string) =>
										resourcePath.endsWith(".module.scss"),
									localIdentName: "[hash:base64:8]",
								},
							},
						},
						"sass-loader",
					],
				},
			]
		}

		webpackConfig.resolve?.modules?.push("src")

		webpackConfig.plugins?.push(
			new webpack.DefinePlugin({
				__IS_DEV__: true,
				__PROJECT__: JSON.stringify("storybok"),
				__API__: JSON.stringify("http://localhost:4200/api/"),
			})
		)

		return webpackConfig
	},
}
export default config
