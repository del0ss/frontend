"use client"
import { configureStore } from "@reduxjs/toolkit"
import pizza from "./slices/pizzaSlice"
import filter from "./slices/filterSlice"
import cart from "./slices/cartSlice"
import pagination from "./slices/paginationSlice"

export const store = configureStore({
	reducer: {
		pizza,
		filter,
		cart,
		pagination,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
