"use client"
import { createSlice } from "@reduxjs/toolkit"
import { Pizza } from "@/types/pizza"

interface PizzaState {
	pizzas: Pizza[]
}

const initialState: PizzaState = {
	pizzas: [],
}


const pizzaSlice = createSlice({
	name: "pizza",
	initialState,
	reducers: {
		setPizza(state, action) {
			state.pizzas = action.payload
		},
	},
})

export const { setPizza } = pizzaSlice.actions

export default pizzaSlice.reducer