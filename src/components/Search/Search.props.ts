import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface SearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children?: ReactNode
}