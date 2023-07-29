import { StoryFn } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import "app/style/index.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
	return (
		<div className={classNames("app", {}, [theme])}>
			<Story />
		</div>
	)
}
