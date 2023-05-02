import {withLayout} from "../../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import {Pizza} from "../../interfaces/pizza";
import Skeleton from "../../components/PizzaCard/Skeleton";
import {useState} from "react";


function Home({posts, pizzas}: HomeProps) {
    const [loading, setLoading] = useState(false)

    return (
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {pizzas.map(pizza => <PizzaCard key={pizza.id} {...pizza} />)}
                    </div>
                </div>
            </div>
    )
}


export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const {data: pizzas} = await axios.get<Pizza[]>(process.env.NEXT_PUBLIC_DOMAIN + "/pizza")

    return {
        props: {
            pizzas,
        }
    }
}


interface HomeProps extends Record<string, unknown> {
    pizzas: Pizza[]
}