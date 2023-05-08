"use client"
import ReactPaginate from "react-paginate"
import styles from "./Pagination.module.scss"
import { usePages } from "../../hooks/usePages"

const Pagination = () => {
	const { isLoading, pages } = usePages()

	return (
		<ReactPaginate
			className={styles.pagination}
			breakLabel="..."
			nextLabel=" >"
			onPageChange={(e) => console.log(e.selected + 1)}
			pageRangeDisplayed={5}
			pageCount={isLoading ? 0 : pages?.data ? pages?.data : 0}
			previousLabel="< "
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination