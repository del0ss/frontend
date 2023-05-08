import "@/scss/app.scss"
import PizzaCard from "@/components/PizzaCard/PizzaCard"
import { PizzasService } from "@/services/pizzas.services"
import Sort from "@/components/Sort/Sort"
import Categories from "@/components/Categories/Categories"
import Pagination from "@/components/Pagination/Pagination"

export default async function HomePage() {
	const { data: pizzas } = await PizzasService.getPizzas()
	const { data: categories } = await PizzasService.getCategories()
	const { data: pages } = await PizzasService.getPages()
	return (
		<div className="content">
			<div className="container">
				<div className="content__top">
					<Categories categories={categories} />
					<Sort />
				</div>
				<h2 className="content__title">Все пиццы</h2>
				<div className="content__items">
					{pizzas.map(pizza => <PizzaCard key={pizza.id} {...pizza} />)}
				</div>
			</div>
			<Pagination pages={pages} />
		</div>
	)
}
