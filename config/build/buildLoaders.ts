import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BuildOptions } from "./types/config"

export function BuildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	}

	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.tsx?$/,
		use: ["@svgr/webpack"],
	}

	const babel = {
		test: /\.(ts|js|tsx|jsx)/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
		},
	}

	const scssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resourcePath: string) =>
							resourcePath.endsWith(".module.scss"),
						localIdentName: isDev
							? "[path][name]__[local]--[hash:base64:5]"
							: "[hash:base64:8]",
					},
				},
			},
			// Compiles Sass to CSS
			"sass-loader",
		],
	}

	return [babel, typescriptLoader, svgLoader, scssLoader]
}
