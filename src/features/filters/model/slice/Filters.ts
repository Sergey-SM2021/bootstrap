import { createSlice } from "@reduxjs/toolkit"
import { FilterSchema } from "../types/FiltersSchema"

const initialState:FilterSchema = {}

const Filter = createSlice({
	name: "filter",
	initialState,
	reducers: {
	},
	extraReducers(builder) {},
})