import axios from "axios"
import { Pizza } from "@/types/pizza"
import { Category } from "@/types/category"
import { API_URL } from "@/config/api.config"

export const PizzasService = {
	async getPizzas(type: string, category: number, page: number) {
		const { data } = await axios.get<Pizza[]>(API_URL + `/`, {
			params: {
				sortType: type,
				category,
				page,
			},
		})

		return data
	},
	async getCategories() {
		return await axios.get<Category[]>(API_URL + "/categories", {})
	},
	async getPages() {
		return await axios.get<number>(API_URL + "/pages", {})
	},
}