import { useQuery } from "react-query"
import { PizzasService } from "@/services/pizzas.services"

export const useCategories = () => {
	const { isLoading, data: categories } = useQuery("categories", () => PizzasService.getCategories(), {
		onError: (error: any) => {
			alert(error.message)
		},
	})
	return { isLoading, categories }
}
