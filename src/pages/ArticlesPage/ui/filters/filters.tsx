import { memo, useCallback, useRef } from "react"
import { useTranslation } from "react-i18next"
import ViewGrid from "shared/assets/view-grid.svg"
import ViewList from "shared/assets/view-list.svg"
import { Flex } from "shared/ui/Flex/Flex"
import { Input } from "shared/ui/Input/Input"
import { Option, Select } from "shared/ui/Select"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"
import { Icon } from "shared/ui/icon/Icon"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { TagsOnFilters } from "entity/Tag/ui/TagsOnFilters/TagsOnFilters"
import { getArticles } from "pages/ArticlesPage/model/services/getArticles"
import {
	getSearch,
	getSortBy,
	getStrategy,
	getTags,
} from "pages/ArticlesPage/model/selectors/ArticlePageSelectors"
import {
	setSearch,
	setSortBy,
	setStrategy,
	toggleView,
} from "pages/ArticlesPage/model/slice/ArticlePage"
import {
	SortBy,
	StrategyType,
} from "pages/ArticlesPage/model/types/articleSchema"
import { AddTagToFilter } from "pages/ArticlesPage/model/services/AddToFilter"

const views = ["small", "big"] as const

export const Filters = memo(() => {
	const searchValue = useSelector(getSearch)
	const sortBy = useSelector(getSortBy)
	const strategy = useSelector(getStrategy)
	const tags = useSelector(getTags)
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const timer = useRef<NodeJS.Timeout>(null)

	const handlerChangeView = useCallback(() => {
		dispatch(toggleView())
	}, [dispatch])

	const handlerInputType = useCallback((value: string) => {
		dispatch(setSearch(value))
		if (timer.current) {
			clearTimeout(timer.current)
		}
		setTimeout(() => {
			dispatch(getArticles({ reset: true, page: 1 }))
		}, 1500)
	},[dispatch])

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
		<Flex direction="column" gap={16}>
			<Flex justify="space-between" align="center">
				<Flex gap={16}>
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
				<Flex full={false}>
					{views.map((view, index) => (
						<AppButton
							key={index}
							theme={AppButtonTheme.clear}
							onClick={handlerChangeView}
						>
							<Icon>{view === "big" ? <ViewList /> : <ViewGrid />}</Icon>
						</AppButton>
					))}
				</Flex>
			</Flex>
			<Input onChange={handlerInputType} value={searchValue} />
			<TagsOnFilters handlerSelectTeg={handlerSortByTag} listOfActive={tags} />
		</Flex>
	)
})
