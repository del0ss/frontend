"use client"
import React from "react"
import PizzaCard from "@/components/Pizzas/PizzaCard"
import Skeleton from "@/components/Pizzas/Skeleton"
import { usePizzas } from "../../hooks/usePizzas"

const Pizzas = (): JSX.Element => {
	const { isLoading, pizzas } = usePizzas()
	return (
		<>
			{isLoading ? (
				<Skeleton />
			) : pizzas?.data ? (
				pizzas.data.map(pizza => <PizzaCard key={pizza.id} {...pizza} />)
			) : <div>No pizzas</div>}
		</>
	)
}

export default Pizzas