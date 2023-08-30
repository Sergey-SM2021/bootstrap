import { memo, useEffect } from "react"
import { TagList } from "../TagList/TagList"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { getTags } from "../../model/service/getTags"
import { getTagsSelector } from "../../model/selectors/tag"
import { useSelector } from "react-redux"

interface TagsOnFiltersProps {
  handlerSelectTeg: (id: number) => () => void;
  listOfActive: number[];
}

export const TagsOnFilters = memo((props: TagsOnFiltersProps) => {
	const { handlerSelectTeg, listOfActive } = props
	const dispatch = useAppDispatch()
	const tags = useSelector(getTagsSelector)

	useEffect(() => {
		dispatch(getTags())
	}, [dispatch])

	return (
		<TagList
			listOfActive={listOfActive}
			list={tags}
			onClick={handlerSelectTeg}
		/>
	)
})
