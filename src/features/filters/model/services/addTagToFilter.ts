import { createAsyncThunk } from "@reduxjs/toolkit"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { getTags } from "../selectors/selectors"
import { removeTag, setTag } from "../slice/Filters"

export const AddTagToFilter = createAsyncThunk<
  void,
  number,
  { state: StoreSchema }
>("filter", (tagID, { getState, dispatch }) => {
	const tags = getTags(getState())
	if (tags.includes(tagID)) {
		dispatch(removeTag(tagID))
	} else {
		dispatch(setTag(tagID))
	}
})
