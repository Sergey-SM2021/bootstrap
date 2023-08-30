import { memo, useEffect } from "react"
import { TagList } from "../TagList/TagList"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { getTags } from "../../model/service/getTags"
import { getTagsSelector } from "../../model/selectors/tag"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import { TagSliceReducer } from "../../model/slice/Tag"
import { useSelector } from "react-redux"

interface TagsOnFiltersProps {
  handlerSelectTeg: (id: string) => () => void;
}

export const TagsOnFilters = memo((props: TagsOnFiltersProps) => {
	const { handlerSelectTeg } = props
	const dispatch = useAppDispatch()
	const tags = useSelector(getTagsSelector)

	useEffect(() => {
		dispatch(getTags())
	}, [dispatch])

	return (
		<AsyncComponent reducer={TagSliceReducer} reducerName="tags">
			<TagList list={tags} onClick={handlerSelectTeg} />
		</AsyncComponent>
	)
})
