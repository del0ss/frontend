import {GetStaticProps} from "next";
import axios from "axios";
import {withLayout} from "../../layout/Layout";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import {Pizza} from "../../types/pizza";
import {Category} from "../../types/category";
import Pagination from "../../components/Pagination/Pagination";


function HomePage({pizzas, categories}: HomeProps) {

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories categories={categories}/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {pizzas.map(pizza => <PizzaCard key={pizza.id} {...pizza} />)}
                </div>
            </div>
            <Pagination/>
        </div>
    )
}


export default withLayout(HomePage)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const {data: pizzas} = await axios.get<Pizza[]>(process.env.NEXT_PUBLIC_DOMAIN + "/pizza")
    const {data: categories} = await axios.get<Category[]>(process.env.NEXT_PUBLIC_DOMAIN + "/pizza/categories")

    return {
        props: {
            pizzas,
            categories
        }
    }
}


interface HomeProps extends Record<string, unknown> {
    pizzas: Pizza[]
    categories: Category[]
}