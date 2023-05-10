"use client"
import { createSlice } from "@reduxjs/toolkit"

interface PageState {
	currentPage: number
	countPage: number
}

const initialState: PageState = {
	currentPage: 1,
	countPage: 0,
}

const paginationSlice = createSlice({
	name: "pagination",
	initialState,
	reducers: {
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		},
		setCountPage(state, action) {
			state.countPage = action.payload
		},
	},
})

export const { setCurrentPage, setCountPage } = paginationSlice.actions

export default paginationSlice.reducer