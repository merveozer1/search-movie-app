import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { SearchContext } from "../../context/SearchContext";
import { PaginationContext } from "../../context/PaginationContext"
import { fetchSearchMovies } from "../../api"
import { useQuery } from "react-query";

function Pagination(props) {
  let pageCount
  const { searchValue, setSearchValue } = useContext(SearchContext)
  const { selectedPage, perPage, handlePageClick } = useContext(PaginationContext)
  const { isLoading, isError, error, isFetched, isFetching, data, ...query } =
    useQuery(["search movies", searchValue], () => fetchSearchMovies(searchValue), {
      select: (data) => data?.data?.results,
      retry: false,
    });
 
  console.log("CONSOLEDA GOSTER::", searchValue)
  if (isFetched) {
    pageCount = Math.ceil(data?.length / perPage)
  }
  return (
  <>
    <div className='container'>
      <div className="row text-center">
        {
          data?.map((item) =>
            <div className="col" key={item?.id}>
              <Link to={`/detail/${item.id}`}>
                <img src={item?.poster_path === null ? `https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=` : `https://image.tmdb.org/t/p/w200` + item?.poster_path } width={"200px"} height={"300px"} alt=""
                />
              </Link>
            </div>
          ).slice(selectedPage, selectedPage + perPage)

        }
        {
          data?.length === 0 && <div className='alert alert-secondary fw-bold fs-3 col-6 mx-auto text-center py-5 mt-5' role="alert">No results found!</div>
        }
      </div>
{
     data?.length > 0 && <ReactPaginate 

        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName={"list-unstyled d-flex align-items-center justify-content-center"}
        previousLinkClassName={"text-warning fw-bold text-decoration-none mx-2 fs-5"}
        nextLinkClassName={"text-warning fw-bold text-decoration-none mx-2 fs-5"}
        disabledLinkClassName={"text-muted"}
        pageLinkClassName={"text-decoration-none mx-1 btn btn-outline-secondary"}
        activeLinkClassName={"fw-bold btn-outline-warning"}
      />
    }
    </div>
  </>
  )
}
export default Pagination
