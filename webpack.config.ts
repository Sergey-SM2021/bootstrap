import path from "path";
import { BuildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildMode, BuildPaths } from "./config/build/types/config";

const mode: BuildMode = "development";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  html: path.resolve(__dirname, "public", "index.html"),
  output: path.resolve(__dirname, "build"),
};

const isDev = mode === "development" 

export default BuildWebpackConfig({
  paths,
  mode,
  isDev
});
