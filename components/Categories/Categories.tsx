import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/redux/store";
import {setCategoryId} from "@/redux/slices/filterSlice";
import {CategoriesProps} from "./Categories.Props"
import cn from "classnames"
const Categories = ({categories} : CategoriesProps) : JSX.Element => {
    const categoryId = useSelector((state: RootState) => state.filter.categoryId)
    const dispatch: AppDispatch = useDispatch()
    return (
        <div className="categories">
            <ul>
                {categories.map(cat =>
                    <li
                        key={cat.id}
                        onClick={() => dispatch(setCategoryId(cat.id))}
                        className={cn({
                            ["active"]: cat.id === categoryId
                        })}
                    >
                        {cat.name}
                    </li>)
                }
            </ul>
        </div>
    )
};

export default Categories;
