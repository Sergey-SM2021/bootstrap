import { memo, useRef } from "react"
import { useTranslation } from "react-i18next"
import ViewGrid from "shared/assets/view-grid.svg"
import ViewList from "shared/assets/view-list.svg"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import { Flex } from "shared/ui/Flex/Flex"
import { Input } from "shared/ui/Input/Input"
import { Option, Select } from "shared/ui/Select"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Icon } from "shared/ui/icon/Icon"
import {
	FilterReducer,
	setSearch,
	setSortBy,
	setStrategy,
} from "../model/slice/Filters"
import { useSelector } from "react-redux"
import {
	getSearch,
	getSortBy,
	getStrategy,
	getTags,
} from "../model/selectors/selectors"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { SortBy, StrategyType } from "../model/types/FiltersSchema"
import { getArticles } from "../model/services/getArticles"
import { TagsOnFilters } from "entity/Tag/ui/TagsOnFilters/TagsOnFilters"
import { AddTagToFilter } from "../model/services/addTagToFilter"

interface FiltersProps {
  handlerChangeView: (mode: "small" | "big") => () => void;
  activeView: "small" | "big";
}

const views = ["small", "big"] as const

export const Filters = memo((props: FiltersProps) => {
	const { handlerChangeView } = props
	const searchValue = useSelector(getSearch)
	const sortBy = useSelector(getSortBy)
	const strategy = useSelector(getStrategy)
	const tags = useSelector(getTags)
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const timer = useRef<NodeJS.Timeout>(null)

	const handlerInputType = (value: string) => {
		dispatch(setSearch(value))
		if (timer.current) {
			clearTimeout(timer.current)
		}
		setTimeout(() => {
			dispatch(getArticles({ reset: true, page: 1 }))
		}, 1500)
	}

	const handlerSetSortBy = (value: string) => {
		dispatch(setSortBy(value as SortBy))
		dispatch(getArticles({ reset: true, page: 1 }))
	}

	const handlerChangeStrategy = (strategy: string) => {
		dispatch(setStrategy(strategy as StrategyType))
		dispatch(getArticles({ reset: true, page: 1 }))
	}

	const handlerSortByTag = (tagID: number) => () => {
		dispatch(AddTagToFilter(tagID))
		dispatch(getArticles({ reset: true, page: 1 }))
	}

	return (
		<AsyncComponent reducer={FilterReducer} reducerName="filter">
			<Flex direction="column" gap={16}>
				<Flex justify="space-between">
					<Flex gap={24}>
						<Select
							onChange={handlerSetSortBy}
							value={sortBy}
							placeholder={t("sort by")}
						>
							<Option value={SortBy.Likes}>{t("by likes")}</Option>
							<Option value={SortBy.Date}>{t("by date")}</Option>
							<Option value={SortBy.Views}>{t("by views")}</Option>
						</Select>
						<Select
							onChange={handlerChangeStrategy}
							value={strategy}
							placeholder={t("sort by")}
						>
							<Option value={StrategyType.asc}>{t("По возрастанию")}</Option>
							<Option value={StrategyType.desc}>{t("По убыванию")}</Option>
						</Select>
					</Flex>
					<Flex>
						{views.map((view, index) => (
							<AppButton
								key={index}
								theme={AppButtonTheme.clear}
								onClick={handlerChangeView(view)}
							>
								<Icon>{view === "big" ? <ViewList /> : <ViewGrid />}</Icon>
							</AppButton>
						))}
					</Flex>
				</Flex>
				<Input onChange={handlerInputType} value={searchValue} />
				<TagsOnFilters handlerSelectTeg={handlerSortByTag} listOfActive={tags}/>
			</Flex>
		</AsyncComponent>
	)
})
