import webpack from "webpack";

export function BuildResolve(): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
