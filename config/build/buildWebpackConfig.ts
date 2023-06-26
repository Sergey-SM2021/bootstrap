import webpack from "webpack";
import { BuildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { BuildResolve } from "./buildResolve";
import { BuildOptions } from "./types/config";
import "webpack-dev-server";
import { BuildDevServer } from "./buildDevServer";

export function BuildWebpackConfig(
  BuildOptions: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = BuildOptions;
  return {
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },
    mode,
    plugins: buildPlugins(BuildOptions),
    module: {
      rules: BuildLoaders(BuildOptions),
    },
    resolve: BuildResolve(BuildOptions),
    devServer: isDev ? BuildDevServer(BuildOptions) : undefined,
    devtool: isDev ? "inline-source-map" : undefined,
  };
}
