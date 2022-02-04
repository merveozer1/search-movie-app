import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { SearchContext } from "../../context/SearchContext";
import { PaginationContext } from "../../context/PaginationContext"
import { fetchSearchMovies } from "../../api"
import { useQuery } from "react-query";
import Icons from "./Icons"
import {Card} from 'react-bootstrap'
function Pagination(props) {
  let pageCount
  const { searchValue } = useContext(SearchContext)
  const { selectedPage, perPage, handlePageClick } = useContext(PaginationContext)
  const { isFetched, data,  } =
    useQuery(["search movies", searchValue], () => fetchSearchMovies(searchValue), {
      select: (data) => data?.data?.results,
      retry: false,
    });
    function MouseOver(event) {
      event.target.style.margin = '20px'
    }
    function MouseOut(event) {
      event.target.style.margin = ''
    }
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
                <img src={item?.poster_path === null ? `https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=` : `https://image.tmdb.org/t/p/w200` + item?.poster_path } width={"220px"} height={"300px"} alt=""  onMouseOver={MouseOver} onMouseOut={MouseOut}
                />
              </Link>
              <Card.Body style={{ width: '16rem', height: '9rem' }} className="d-flex flex-column justify-content-end" > 
              <Card.Title className="text-muted">{item.title}</Card.Title>
                  
              <Card.Text className="" > { < Icons movieId = {item.id} movieTitle = { item.title }/>} 
              </Card.Text>
              </Card.Body>
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
