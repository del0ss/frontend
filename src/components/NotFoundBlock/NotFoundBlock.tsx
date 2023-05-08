import React from "react"

import { NotFoundBlockProps } from "./NotFoundBlock.Props"
import styles from "./NotFoundBlock.module.scss"
import P from "../Ptag/P"

const NotFoundBlock = ({ children }: NotFoundBlockProps): JSX.Element => {
	return (
		<div className={styles.root}>
			<h1>
				<span>😕</span>
				<br />
				Ничего не найдено
				<P size={"m"}>Такая страница не существует</P>
			</h1>
		</div>
	)
}


export default NotFoundBlock