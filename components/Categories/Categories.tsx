import React, {useState} from 'react';
import {CategoriesProps} from "./Categories.Props";
import {GetStaticProps} from "next";
import axios from "axios";
import {Pizza} from "../../interfaces/pizza";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {setCategoryId} from "@/redux/slices/filterSlice";

const Categories = ({} : CategoriesProps) : JSX.Element => {
    const categories: string[] = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
    const categoryId = useSelector((state: RootState) => state.filter.categoryId)
    const dispatch = useDispatch()
    return (
        <div className="categories">
            <ul>
                {categories.map((cat, i) =>
                    <li
                        key={i}
                        onClick={() => dispatch(setCategoryId(i))}
                        className={categoryId === i ? "active" : ""}
                    >
                        {cat}
                    </li>)
                }
            </ul>
        </div>
    )
};

export default Categories;

// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
//     const {data: pizzas} = await axios.get<Pizza[]>(process.env.NEXT_PUBLIC_DOMAIN + "/pizza")
//
//     return {
//         props: {
//             pizzas,
//         }
//     }
// }
//
//
// interface HomeProps extends Record<string, unknown> {
//     pizzas: Pizza[]
// }