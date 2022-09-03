import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, setPageNumber, info }) => {
  return (
    <ReactPaginate
      pageCount={info?.pages}
      className="pagination justify-content-center gap-4 my-4"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousLabel="Prev"
      nextLabel="Next"
      nextClassName="btn btn-outline-primary"
      previousClassName="btn btn-outline-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => setPageNumber(data.selected + 1)}
    />
  );
};

export default Pagination;
