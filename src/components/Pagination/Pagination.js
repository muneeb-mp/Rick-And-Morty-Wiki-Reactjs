import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, setPageNumber, info }) => {
  let [width, setWidth] = useState(window.innerWidth);
  console.log(width);

  let updateWindowWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return window.removeEventListener("resize", updateWindowWidth);
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        pageCount={info?.pages}
        className="pagination justify-content-center gap-4 my-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        nextLabel="Next"
        nextClassName="btn btn-outline-primary next"
        previousClassName="btn btn-outline-primary prev"
        pageClassName="page-item"
        marginPagesDisplayed={width < 576 ? 1 : 3}
        pageRangeDisplayed={width < 576 ? 1 : 3}
        pageLinkClassName="page-link"
        activeClassName="active"
        onPageChange={(data) => setPageNumber(data.selected + 1)}
      />
    </>
  );
};

export default Pagination;
