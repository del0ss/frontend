import React from 'react';
import {PProps} from "./P.props";
import cn from "classnames";
import styles from './P.module.css';

const P = ({size = "m", children, className, ...props}: PProps) : JSX.Element => {
    return (
        <p className={cn(styles.p, className,
            {
                [styles.s]: size === "s",
                [styles.l]: size === "l",
                [styles.m]: size === "m",
            }
        )} {...props}
        >
            {children}
        </p>
    );
};

export default P;