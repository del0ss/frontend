"use client"
import ReactPaginate from "react-paginate"
import styles from "./Pagination.module.scss"
import { PaginationProps } from "./Pagination.Props"

const Pagination = ({ pages }: PaginationProps) => {
	return (
		<ReactPaginate
			className={styles.pagination}
			breakLabel="..."
			nextLabel=" >"
			onPageChange={(e) => console.log(e.selected + 1)}
			pageRangeDisplayed={5}
			pageCount={pages}
			previousLabel="< "
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination