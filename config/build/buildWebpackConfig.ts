import webpack from "webpack";
import { BuildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { BuildResolve } from "./buildResolve";
import { BuildOptions } from "./types/config";

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
      rules: BuildLoaders(),
    },
    resolve: BuildResolve(),
  };
}
