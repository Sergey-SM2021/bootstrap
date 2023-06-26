import path from "path";
import { BuildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (ENV: BuildEnv) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "build"),
  };

  const isDev = ENV.MODE === "development";
  
  return BuildWebpackConfig({
    paths,
    mode: ENV.MODE || "development",
    isDev,
    port: ENV.PORT || 3300,
  });
};
