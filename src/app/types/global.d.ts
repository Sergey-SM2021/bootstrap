declare module "*.scss" {
  const content: Record<string, string>
  export default content
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module "*.jpg"

declare const __IS_DEV__: boolean

declare const __PROJECT__: "frontend" | "storybook" | "jest"

declare const __API__: string

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
