import {ReactNode} from "react";

export interface PizzaCardProps {
    id: number
    name: string
    price: number
    imageURL: string
    sizes: number[]
    types: number[]
    children?: ReactNode
}

export enum PizzaEnum {
    "Традиционное",
    "Тонкое"
}

