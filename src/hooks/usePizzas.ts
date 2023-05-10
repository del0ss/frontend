"use client"
import { useQuery } from "react-query"
import { PizzasService } from "@/services/pizzas.services"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { setPizza } from "@/store/slices/pizzaSlice"

export const usePizzas = () => {
	const { pizzas } = useSelector((state: RootState) => state.pizza)
	const { sort, categoryId } = useSelector((state: RootState) => state.filter)
	const { currentPage } = useSelector((state: RootState) => state.pagination)
	const dispatch = useDispatch()
	const { isLoading } = useQuery(["pizza", sort.sortProperty, categoryId, currentPage],
		() => PizzasService.getPizzas(sort.sortProperty, categoryId, currentPage),
		{
			onSuccess: data => {
				dispatch(setPizza(data))
			},

			onError: (error: any) => {
				alert(error.message)
			},
		})
	return { isLoading, pizzas }
}
