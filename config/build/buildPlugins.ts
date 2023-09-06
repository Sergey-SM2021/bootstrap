import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import CircularDependencyPlugin from "circular-dependency-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"

export function buildPlugins({
	paths,
	isDev,
	api,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css",
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: isDev,
			__PROJECT__: JSON.stringify("frontend"),
			__API__: JSON.stringify(api),
		}),
	]
	if (isDev) {
		return [
			...plugins,
			new webpack.ProgressPlugin(),
			new BundleAnalyzerPlugin(),
			new webpack.HotModuleReplacementPlugin(),
			new ForkTsCheckerWebpackPlugin(),
      // @ts-ignore
      new CircularDependencyPlugin({
      	exclude: /node_modules/,
      }) as webpack.WebpackPluginInstance,
		]
	}
	return plugins
}
