import React from "react";
import Link from "next/link";
import Image from "next/image";
import cartEmptyPng from "../../src/assets/img/empty-cart.png"


const CartEmpty = (): JSX.Element => {
    return (
        <div className="cart cart--empty">
            <h2>Корзина пустая <span>😕</span></h2>
            <p>Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <Image src={cartEmptyPng} width="300" alt="Empty cart"/>
            <Link className="button button--black" href="/"><span>Вернуться назад</span></Link>
        </div>
)
};

export default CartEmpty;