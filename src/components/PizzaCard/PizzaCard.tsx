"use client"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "@/store/slices/cartSlice"
import { AppDispatch, RootState } from "@/store/store"
import cn from "classnames"
import Button from "../Button/Button"
import { PizzaCardProps, PizzaEnum } from "./PizzaCard.Props"
import { Item } from "@/types/item"

const PizzaCard = ({ id, name, price, imageURL, sizes, types, children }: PizzaCardProps): JSX.Element => {
	const dispatch: AppDispatch = useDispatch()
	const item = useSelector((state: RootState) => state.cart.items.find(item => item.id === id))
	const [activeSize, setActiveSize] = useState(0)
	const [activeType, setActiveType] = useState(0)
	const addItems = item ? item.count : 0
	const onClickAdd = () => {
		const item: Item = {
			id,
			name,
			price,
			imageURL,
			size: sizes[activeSize],
			type: PizzaEnum[activeType],
			count: 1
		}
		dispatch(addItem(item))
	}

	return (
		<div className="pizza-block-wrapper">
			<div className="pizza-block">
				<img
					className="pizza-block__image"
					src={imageURL}
					alt="Pizza"
				/>
				<h4 className="pizza-block__title">{name}</h4>
				<div className="pizza-block__selector">
					<ul>
						{types.map((type) => <li
								key={type}
								onClick={() => setActiveType(type)}
								className={cn({
									["active"]: activeType === type
								})}>{PizzaEnum[type]}
							</li>
						)}
					</ul>
					<ul>
						{sizes.map((size, i) => <li
								key={size}
								onClick={() => setActiveSize(i)}
								className={cn({
									["active"]: activeSize === i
								})}>{size} см.
							</li>
						)}
					</ul>
				</div>
				<div className="pizza-block__bottom">
					<div className="pizza-block__price">от {price} ₽</div>
					<Button onClick={onClickAdd}>
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
								fill="white"
							/>
						</svg>
						<span>Добавить</span>
						{addItems > 0 && <i>{addItems}</i>}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default PizzaCard