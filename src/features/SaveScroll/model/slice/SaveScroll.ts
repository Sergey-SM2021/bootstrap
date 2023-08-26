import { type SaveScrollSchema } from "../type/SaveScrollSchema"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: SaveScrollSchema = {}

const SaveScroll = createSlice({
	name: "SaveScroll",
	initialState,
	reducers: {
		setScrollPosition: (
			state,
			payload: PayloadAction<{ top: number; path: string }>
		) => {
			state[payload.payload.path] = payload.payload.top
		},
	},
})

export const SaveScrollReducer = SaveScroll.reducer
export const { setScrollPosition } = SaveScroll.actions
