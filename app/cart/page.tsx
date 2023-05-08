"use client"
import Link from "next/link"
import cartSvg from "@/assets/img/cart.svg"
import trashSvg from "@/assets/img/trash.svg"
import arrowLeftSvg from "@/assets/img/grey-arrow-left.svg"
import CartItem from "./CartItem"
import { AppDispatch, RootState } from "@/store/store"
import { useDispatch, useSelector } from "react-redux"
import { clearItem } from "@/store/slices/cartSlice"
import CartEmpty from "./CartEmpty"
import Image from "next/image"

export default function CartPage() {
	const dispatch: AppDispatch = useDispatch()
	const { totalPrice, items } = useSelector((state: RootState) => state.cart)
	const totalCount = items.reduce((sum, item) => {
		return sum + item.count
	}, 0)

	const onClickClearCart = () => {
		if (window.confirm("Хотите очистить корзину?")) {
			dispatch(clearItem())
		}
	}

	if (!totalPrice) {
		return <CartEmpty />
	}
	return (
		<div className="container container--cart">
			<div className="cart">
				<div className="cart__top">
					<h2 className="content__title">
						<Image src={cartSvg} alt="cart" /> Корзина
					</h2>
					<div onClick={onClickClearCart} className="cart__clear">
						<Image src={trashSvg} alt="trash" />
						<span>Очистить корзину</span>
					</div>
				</div>
				<div className="content__items">
					{
						items.map(item => <CartItem key={item.id} {...item} />)
					}

				</div>
				<div className="cart__bottom">
					<div className="cart__bottom-details">
						<span> Всего пицц: <b>{totalCount} шт.</b> </span>
						<span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
					</div>
					<div className="cart__bottom-buttons">
						<Link href="/" className="button button--outline button--add go-back-btn">
							<Image src={arrowLeftSvg} alt="arrow" />
							<span>Вернуться назад</span>
						</Link>
						<div className="button pay-btn">
							<span>Оплатить сейчас</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}