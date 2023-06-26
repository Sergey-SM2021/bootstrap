import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function BuildDevServer({ port }: BuildOptions): Configuration {
  return {
    historyApiFallback: true,
    port: port,
    open: true,
  };
}
