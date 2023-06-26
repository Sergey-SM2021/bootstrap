import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function BuildDevServer({ port }: BuildOptions): Configuration {
  return {
    port: port,
    open: true,
  };
}
