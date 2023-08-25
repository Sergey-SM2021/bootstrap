import { SaveScroll } from "../type/SaveScroll"
import { type SaveScrollSchema } from "../type/SaveScrollSchema"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: SaveScrollSchema = []

const SaveScroll = createSlice({
	name: "SaveScroll",
	initialState,
	reducers: {
		setScrollPosition: (state, payload: PayloadAction<SaveScroll>) => {
			state = [{ path: "L:L:L:", top: 879 }]
		},
	},
})

export const SaveScrollReducer = SaveScroll.reducer
export const { setScrollPosition } = SaveScroll.actions
