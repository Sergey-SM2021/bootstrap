import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "shared/config/storybook/decorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

const meta: Meta<typeof Sidebar> = {
  title: "Widget/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.darkTheme)],
};
