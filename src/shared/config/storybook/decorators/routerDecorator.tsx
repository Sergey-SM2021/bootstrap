import { StoryFn } from "@storybook/react"
import { MemoryRouter } from "react-router-dom"

export const RouterDecorator = (path?: string) => (Story:StoryFn) => (
	<MemoryRouter basename={path??"/"}>
		<Story />
	</MemoryRouter>
)
