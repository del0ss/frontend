"use client"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/store/store"
import { setCategoryId } from "@/store/slices/filterSlice"
import cn from "classnames"
import { useCategories } from "@/hooks/useCategories"

const Categories = (): JSX.Element => {
	const { isLoading, categories } = useCategories()
	const categoryId = useSelector((state: RootState) => state.filter.categoryId)
	const dispatch: AppDispatch = useDispatch()
	return (
		<div className="categories">
			<ul>
				{isLoading ? <div>Loading....</div> : categories?.data ? (categories?.data.map(cat =>
					<li
						key={cat.id}
						onClick={() => dispatch(setCategoryId(cat.id))}
						className={cn({
							["active"]: cat.id === categoryId,
						})}
					>
						{cat.name}
					</li>)) : <div>No categories</div>
				}
			</ul>
		</div>
	)
}

export default Categories
