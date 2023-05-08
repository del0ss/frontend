"use client"
import { createSlice } from "@reduxjs/toolkit"
import { Item } from "@/types/item"
import { WritableDraft } from "immer/src/types/types-external"

interface CartState {
	totalPrice: number
	items: Item[]
}

const initialState: CartState = {
	totalPrice: 0,
	items: [],
}

const countTotalPrice = (state: WritableDraft<CartState>) => {
	state.totalPrice = state.items.reduce((sum, item) => {
		return item.price * item.count + sum
	}, 0)
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			const findItem = state.items.find(item => item.id === action.payload.id)
			if (findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				})
			}
			countTotalPrice(state)
		},

		minusItem(state, action) {
			const findItem = state.items.find(item => item.id === action.payload)
			if (findItem && findItem.count > 1) {
				findItem.count--
			} else {
				state.items = state.items.filter(item => item.id !== action.payload)
			}
			countTotalPrice(state)
		},

		removeItem(state, action) {
			state.items = state.items.filter(item => item.id !== action.payload)
		},

		clearItem(state) {
			state.items = []
			state.totalPrice = 0
		},
	},
})

export const { addItem, minusItem, removeItem, clearItem } = cartSlice.actions

export default cartSlice.reducer