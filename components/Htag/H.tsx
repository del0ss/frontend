import React from 'react';
import {HProps} from "./H.Props";
import styles from "./H.module.css"
const H = ({tag, children} : HProps) : JSX.Element => {
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