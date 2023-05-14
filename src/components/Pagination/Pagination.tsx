"use client"
import ReactPaginate from "react-paginate"
import styles from "./Pagination.module.scss"
import { usePages } from "@/hooks/usePages"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { setCurrentPage } from "@/store/slices/filterSlice"

const Pagination = () => {
	let { currentPage, countPage } = useSelector((state: RootState) => state.filter)
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