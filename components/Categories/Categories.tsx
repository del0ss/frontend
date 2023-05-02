import React from 'react';
import {CategoriesProps} from "./Categories.Props";
import {GetStaticProps} from "next";
import axios from "axios";
import {Pizza} from "../../interfaces/pizza";
const Categories = ({} : CategoriesProps) : JSX.Element => {
    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                <li>Мясные</li>
                <li>Вегетарианская</li>
                <li>Гриль</li>
                <li>Острые</li>
                <li>Закрытые</li>
            </ul>
        </div>
    )
};

export default Categories;

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