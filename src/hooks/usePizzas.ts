"use client"
import { useQuery } from "react-query"
import { PizzasService } from "@/services/pizzas.services"

export const usePizzas = () => {
	const { isLoading, data: pizzas } = useQuery(["pizza"],
		() => PizzasService.getPizzas(),
		{
			onError: (error: any) => {
				alert(error.message)
			},
		})
	return { isLoading, pizzas }
}
