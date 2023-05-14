import { Pizza } from "@/types/pizza"
import { Category } from "@/types/category"
import { API_URL } from "@/config/api.config"
import { axiosClassic } from "../api/interceptors"

export const PizzasService = {
	async getPizzas(type: string, category: number, page: number) {
		const { data } = await axiosClassic.get<Pizza[]>(API_URL + `/`, {
			params: {
				sortType: type,
				category,
				page,
			},
		})

		return data
	},
	async getCategories() {
		return await axiosClassic.get<Category[]>(API_URL + "/categories", {})
	},
	async getPages() {
		return await axiosClassic.get<number>(API_URL + "/pages", {})
	},
}