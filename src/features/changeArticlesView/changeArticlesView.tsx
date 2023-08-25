import { memo } from "react"
import ViewGrid from "shared/assets/view-grid.svg"
import ViewList from "shared/assets/view-list.svg"
import { Flex } from "shared/ui/Flex/Flex"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Icon } from "shared/ui/icon/Icon"

interface ChangeArticleViewProps {
  handlerChange: (mode: "small" | "big") => () => void;
  articlesLength: number;
  activeView: "small" | "big";
}

const views = ["small", "big"] as const

export const ChangeArticleView = memo((props: ChangeArticleViewProps) => {
	const { handlerChange, articlesLength } = props

	if (!articlesLength) {
		return null
	}

	return (
		<Flex gap={32} justify="flex-end">
			{views.map((view, index) => (
				<AppButton
					key={index}
					theme={AppButtonTheme.clear}
					onClick={handlerChange(view)}
				>
					<Icon>{view === "big" ? <ViewList /> : <ViewGrid />}</Icon>
				</AppButton>
			))}
		</Flex>
	)
})
