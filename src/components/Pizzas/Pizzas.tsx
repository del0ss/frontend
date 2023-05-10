"use client"
import React from "react"
import { usePizzas } from "@/hooks/usePizzas"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import PizzaCard from "@/components/Pizzas/PizzaCard"

const Pizzas = (): JSX.Element => {
	const { sort, categoryId } = useSelector((state: RootState) => state.filter)
	const { isLoading, pizzas } = usePizzas()

	const sortByField = () => {
		return sort.sortProperty
	}
	return (
		<>
			{isLoading ? (
				<>Loading....</>
			) : pizzas ? (
				pizzas.map(pizza => <PizzaCard key={pizza.id} {...pizza} />,
				)
			) : <div>No pizzas</div>}
		</>
	)
}

export default Pizzas