import { memo } from "react"
import ViewGrid from "shared/assets/view-grid.svg"
import ViewList from "shared/assets/view-list.svg"
import { Flex } from "shared/ui/Flex/Flex"
import { Input } from "shared/ui/Input/Input"
import { Label } from "shared/ui/Label/Label"
import { Option, Select } from "shared/ui/Select"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Icon } from "shared/ui/icon/Icon"

interface FiltersProps {
  handlerChange: (mode: "small" | "big") => () => void;
  articlesLength: number;
  activeView: "small" | "big";
}

const views = ["small", "big"] as const

export const Filters = memo((props: FiltersProps) => {
	const { handlerChange, articlesLength } = props

	if (!articlesLength) {
		return null
	}

	return (
		<Flex direction="column" gap={16}>
			<Flex justify="space-between">
				<Select
					onChange={() => {}}
					initialValue={{ label: "без сортировки", value: "без сортировки" }}
				>
					<Option label="По названию" value="ByName" />
					<Option label="По дате" value="ByDate" />
					<Option label="По просмотрам" value="ByViews" />
				</Select>
				<Flex>
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
			</Flex>
			<Input onChange={() => {}} value="" />
			<Flex gap={24}>
				<Label></Label>
				<Label></Label>
				<Label></Label>
			</Flex>
		</Flex>
	)
})
