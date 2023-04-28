import React from 'react';
import {CategoriesProps} from "./Categories.Props";
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