"use client"
import { createSlice } from "@reduxjs/toolkit"

interface FilterState {
	categoryId: number
	sort: {
		name: string
		sortProperty: string
	}
	currentPage: number
	countPage: number
}

const initialState: FilterState = {
	categoryId: 1,
	sort: {
		name: "популярности",
		sortProperty: "rating",
	},
	currentPage: 1,
	countPage: 0,
}

const filterSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload
		},
		setSort(state, action) {
			state.sort = action.payload
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		},
		setCountPage(state, action) {
			state.countPage = action.payload
		},
	},
})

export const { setCategoryId, setSort, setCountPage, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer