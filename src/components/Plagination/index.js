import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Plagination.module.scss';
export const Plagination = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    ></ReactPaginate>
  );
};
