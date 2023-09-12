import type { Meta, StoryObj } from "@storybook/react"
import pathToImg from "shared/assets/assasyn.jpg"

import { AppImage } from "./AppImage"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"

const meta: Meta<typeof AppImage> = {
	title: "Shared/AppImage",
	component: AppImage,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AppImage>;

export const Default: Story = {
	args: {
		width: "400px",
		height: "200px",
		// eslint-disable-next-line
    ErrorFallback: <div>Error</div>,
		src: pathToImg,
		fallback: <Skeleton height={200} width={400} radius={25} />,
	},
}

export const Error: Story = {
	args: {
		width: "400px",
		height: "200px",
		// eslint-disable-next-line
    ErrorFallback: <div>Error</div>,
		src: "pathToImg",
		fallback: <Skeleton height={200} width={400} radius={25} />,
	},
}
