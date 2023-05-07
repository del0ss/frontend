import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from "./Pagination.module.scss"
const Pagination = () => {
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel=" >"
            onPageChange={(e) => console.log(e.selected + 1)}
            pageRangeDisplayed={5}
            pageCount={3}
            previousLabel="< "
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;