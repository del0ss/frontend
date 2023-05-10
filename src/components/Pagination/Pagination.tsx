"use client"
import ReactPaginate from "react-paginate"
import styles from "./Pagination.module.scss"
import { usePages } from "@/hooks/usePages"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentPage } from "@/store/slices/paginationSlice"
import { RootState } from "@/store/store"

const Pagination = () => {
	let { currentPage, countPage } = useSelector((state: RootState) => state.pagination)
	const dispatch = useDispatch()
	const { isLoading, pages } = usePages()
	if (pages?.data) {
		countPage = pages?.data
	}
	return (
		<ReactPaginate
			className={styles.pagination}
			breakLabel="..."
			nextLabel=" >"
			onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
			pageRangeDisplayed={5}
			pageCount={countPage}
			forcePage={currentPage - 1}
			previousLabel="< "
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination