import Link from "next/link";
import {withLayout} from "../../layout/Layout";
import CartSvg from "../assets/img/cart.svg"
import TrashSvg from "../assets/img/trash.svg"
import ArrowLeftSvg from "../assets/img/grey-arrow-left.svg"
import CartItem from "../../components/Cart/CartItem";
import {AppDispatch, RootState} from "@/redux/store";
import {useDispatch, useSelector} from "react-redux";
import {clearItem} from "@/redux/slices/cartSlice";
import CartEmpty from "../../components/Cart/CartEmpty";

function Cart() {
    const dispatch: AppDispatch = useDispatch()
    const {totalPrice, items} = useSelector((state: RootState) => state.cart)
    const totalCount = items.reduce((sum, item) => {
        return sum + item.count
    }, 0)

    const onClickClearCart = () => {
        if(window.confirm("Хотите очистить корзину?")){
            dispatch(clearItem())
        }
    }

    if (!totalPrice) {
        return <CartEmpty/>
    }
    return (
        <div className="container container--cart">
            <div className="cart">
                <div className="cart__top">
                    <h2 className="content__title">
                        <CartSvg/> Корзина
                    </h2>
                    <div onClick={onClickClearCart} className="cart__clear">
                        <TrashSvg/>
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div className="content__items">
                    {
                        items.map(item =>  {
                            return <CartItem key={item.id} {...item} />
                        })
                    }

                </div>
                <div className="cart__bottom">
                    <div className="cart__bottom-details">
                        <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                        <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
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