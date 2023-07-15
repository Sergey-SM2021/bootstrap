import type { Meta, StoryObj } from "@storybook/react"

import { TemplateName } from "./TemplateName"

const meta: Meta<typeof TemplateName> = {
	title: "Shared/TemplateName",
	component: TemplateName,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TemplateName>;

export const Primary: Story = {}
