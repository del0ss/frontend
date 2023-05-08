import { useQuery } from "react-query"
import { PizzasService } from "@/services/pizzas.services"

export const usePages = () => {
	const { isLoading, data: pages } = useQuery("pages", () => PizzasService.getPages(), {
		onError: (error: any) => {
			alert(error.message)
		},
	})
	return { isLoading, pages }
}
