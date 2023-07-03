import { CssDecorator } from "../../src/shared/config/storybook/decorators/cssDecorator";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [CssDecorator],
};

export default preview;
