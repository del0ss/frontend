import {ReactNode} from "react";

export interface PizzaCardProps {
    name: string
    price: number
    imageURL: string
    sizes: number[]
    types: number[]
    children?: ReactNode
}