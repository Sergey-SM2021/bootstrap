export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string
}

export interface BuildOptions {
  mode?: BuildMode;
  paths: BuildPaths;
  isDev: boolean
  port: number
  api: string
}


export interface BuildEnv {
  MODE: BuildMode
  PORT: number
  API: string
}