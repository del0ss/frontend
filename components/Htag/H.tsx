import React from 'react';
import {HtagProps} from "./Htag.Props";
import styles from "./Htag.module.css"
const H = ({tag, children} : HtagProps) : JSX.Element => {
    switch (tag) {
        case "h1":
            return (<h1 className={styles.h1}>{children}</h1>)
        case "h2":
            return (<h2 className={styles.h2}>{children}</h2>)
        default:
            return (<></>)
    }
};

export default H;