import axios from "axios"
import { Pizza } from "../../../../types/pizza"

type PizzaIdProps = {
	params: {
		pizzaid: string
	}
}
const loadPizza = async (id: string) => {
	const { data } = await axios.get<Pizza>(`http://localhost:8000/pizza/${id}`)
	return data
}
export default async function PizzaPage({ params: { pizzaid } }: PizzaIdProps) {
	const pizza = await loadPizza(pizzaid)
	return (
		<div className="content">
			<div className="container">
				<div className="content__top">
				</div>
				<h2 className="content__title">Все пиццы</h2>
				<div className="content__items">
					{pizza.id}
				</div>
			</div>
		</div>
	)
}