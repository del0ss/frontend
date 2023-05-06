import React from 'react';
import {CartProps} from "./Cart.Props";
import PlusSvg from "@/assets/img/plus.svg";
import {AppDispatch} from "@/redux/store";
import {useDispatch} from "react-redux";
import {addItem, removeItem, minusItem} from "@/redux/slices/cartSlice";

const CartItem = ({ ...props} : CartProps) : JSX.Element => {
    const dispatch: AppDispatch = useDispatch()
    const onClickRemove = () => {
        if(window.confirm("Хотите удалить эту пиццу?")){
            dispatch(removeItem(props.id))
        }
    }
    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img
                    className="pizza-block__image"
                    src={props.imageURL}
                    alt="Pizza"
                />
            </div>
            <div className="cart__item-info">
                <h3>{props.name}</h3>
                <p>{props.type}, {props.size} см.</p>
            </div>
            <div className="cart__item-count">
                <div onClick={() => dispatch(minusItem(props.id))} className="button button--outline button--circle cart__item-count-minus">
                    <PlusSvg />
                </div>
                <b>{props.count}</b>
                <div onClick={() => dispatch(addItem(props))} className="button button--outline button--circle cart__item-count-plus">
                    <PlusSvg/>
                </div>
            </div>
            <div className="cart__item-price">
                <b>{props.price * props.count} ₽</b>
            </div>
            <div onClick={onClickRemove} className="cart__item-remove">
                <div className="button button--outline button--circle">
                    <PlusSvg/>
                </div>
            </div>
        </div>
    )
};

export default CartItem;
