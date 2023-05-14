import "@/scss/app.scss"
import Sort from "@/components/Sort/Sort"
import Categories from "@/components/Categories/Categories"
import Pizzas from "@/components/Pizzas/Pizzas"
import Pagination from "@/components/Pagination/Pagination"

export default function Home() {
	return (
		<div className="content">
			<div className="container">
				<div className="content__top">
					<Categories />
					<Sort />
				</div>
				<h2 className="content__title">Все пиццы</h2>
				<div className="content__items">
					<Pizzas />
				</div>
			</div>
			<Pagination />
		</div>
	)
}
