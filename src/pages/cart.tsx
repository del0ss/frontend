import Link from "next/link";
import {withLayout} from "../../layout/Layout";
import CartSvg from "../assets/img/cart.svg"
import TrashSvg from "../assets/img/trash.svg"
import PlusSvg from "../assets/img/plus.svg"
import ArrowLeftSvg from "../assets/img/grey-arrow-left.svg"

function Cart() {
    return (
        <div className="container container--cart">
            <div className="cart">
                <div className="cart__top">
                    <h2 className="content__title">
                        <CartSvg/> Корзина
                    </h2>
                    <div className="cart__clear">
                        <TrashSvg/>
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div className="content__items">
                    <div className="cart__item">
                        <div className="cart__item-img">
                            <img
                                className="pizza-block__image"
                                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                                alt="Pizza"
                            />
                        </div>
                        <div className="cart__item-info">
                            <h3>Сырный цыпленок</h3>
                            <p>тонкое тесто, 26 см.</p>
                        </div>
                        <div className="cart__item-count">
                            <div className="button button--outline button--circle cart__item-count-minus">
                                <PlusSvg/>
                            </div>
                            <b>2</b>
                            <div className="button button--outline button--circle cart__item-count-plus">
                                <PlusSvg/>
                            </div>
                        </div>
                        <div className="cart__item-price">
                            <b>770 ₽</b>
                        </div>
                        <div className="cart__item-remove">
                            <div className="button button--outline button--circle">
                                <PlusSvg/>
                            </div>
                        </div>
                    </div>
                    <div className="cart__item">
                        <div className="cart__item-img">
                            <img
                                className="pizza-block__image"
                                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                                alt="Pizza"
                            />
                        </div>
                        <div className="cart__item-info">
                            <h3>Сырный цыпленок</h3>
                            <p>тонкое тесто, 26 см.</p>
                        </div>
                        <div className="cart__item-count">
                            <div className="button button--outline button--circle cart__item-count-minus">
                                <PlusSvg/>
                            </div>
                            <b>2</b>
                            <div className="button button--outline button--circle cart__item-count-plus">
                                <PlusSvg/>
                            </div>
                        </div>
                        <div className="cart__item-price">
                            <b>770 ₽</b>
                        </div>
                        <div className="cart__item-remove">
                            <div className="button button--outline button--circle">
                                <PlusSvg/>
                            </div>
                        </div>
                    </div>
                    <div className="cart__item">
                        <div className="cart__item-img">
                            <img
                                className="pizza-block__image"
                                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                                alt="Pizza"
                            />
                        </div>
                        <div className="cart__item-info">
                            <h3>Сырный цыпленок</h3>
                            <p>тонкое тесто, 26 см.</p>
                        </div>
                        <div className="cart__item-count">
                            <div className="button button--outline button--circle cart__item-count-minus">
                                <PlusSvg/>
                            </div>
                            <b>2</b>
                            <div className="button button--outline button--circle cart__item-count-plus">
                                <PlusSvg/>
                            </div>
                        </div>
                        <div className="cart__item-price">
                            <b>770 ₽</b>
                        </div>
                        <div className="cart__item-remove">
                            <div className="button button--outline button--circle">
                                <PlusSvg/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart__bottom">
                    <div className="cart__bottom-details">
                        <span> Всего пицц: <b>3 шт.</b> </span>
                        <span> Сумма заказа: <b>900 ₽</b> </span>
                    </div>
                    <div className="cart__bottom-buttons">
                        <Link href="/" className="button button--outline button--add go-back-btn">
                            <ArrowLeftSvg/>
                            <span>Вернуться назад</span>
                        </Link>
                        <div className="button pay-btn">
                            <span>Оплатить сейчас</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default withLayout(Cart)