import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"

export function buildPlugins({
	paths,
	isDev,
	api
}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css",
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: isDev,
			__PROJECT__: JSON.stringify("frontend"),
			__API__: JSON.stringify(api),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new BundleAnalyzerPlugin(),
	]
}
