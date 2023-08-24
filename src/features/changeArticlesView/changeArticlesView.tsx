import ViewGrid from "shared/assets/view-grid.svg"
import ViewList from "shared/assets/view-list.svg"
import { Flex } from "shared/ui/Flex/Flex"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Icon } from "shared/ui/icon/Icon"

interface ChangeArticleViewProps {
  handlerChange: (mode: "small" | "big") => () => void;
  articlesLength: number;
}

export const ChangeArticleView = (props: ChangeArticleViewProps) => {
	const { handlerChange, articlesLength } = props

	if (!articlesLength) {
		return null
	}
	return (
		<Flex gap={32} justify="flex-end">
			<AppButton theme={AppButtonTheme.clear} onClick={handlerChange("small")}>
				<Icon>
					<ViewGrid />
				</Icon>
			</AppButton>
			<AppButton theme={AppButtonTheme.clear} onClick={handlerChange("big")}>
				<Icon>
					<ViewList />
				</Icon>
			</AppButton>
		</Flex>
	)
}
