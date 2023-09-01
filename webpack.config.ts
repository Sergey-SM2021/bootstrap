import path from "path"
import { BuildWebpackConfig } from "./config/build/buildWebpackConfig"
import { BuildEnv, BuildPaths } from "./config/build/types/config"

export default ({ MODE = "development", PORT = 3300, API }: BuildEnv) => {
  
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		html: path.resolve(__dirname, "public", "index.html"),
		output: path.resolve(__dirname, "build"),
		src: path.resolve(__dirname, "src"),
	}

	const isDev = MODE === "development"


	return BuildWebpackConfig({
		api: API,
		paths,
		mode: MODE,
		isDev,
		port: PORT
	})
}
