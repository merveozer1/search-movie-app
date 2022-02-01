import React from 'react';
import { useContext } from 'react';
import { useDebounce } from "rooks";
import { SearchContext } from "../../context/SearchContext"
import { useNavigate, useLocation } from 'react-router-dom';

const Search = (props) => {
    const location = useLocation();
    const navigate = useNavigate()
  const {searchValue, setSearchValue} = useContext(SearchContext)
  const setValueDebounced = useDebounce(setSearchValue, 700);
 console.log(searchValue)
      function formHandler(event) {
          navigate(`/search?q=${event.target.value}`)
      setValueDebounced(event.target.value)
      }
  return (
      <div className="container mt-3 my-5">
          <div className='row text-light'>
              <div className="col-lg-10 col-8">
                  <label htmlFor="search" className="form-label fs-3"></label>
                  <input name="qInput" type="text" className="form-control" id="search"
                      placeholder="Search" defaultValue={searchValue} value={location.pathname==="/search" ? searchValue : ""
                    } onChange={formHandler} />
              </div>
              <div className="col-lg-2 col-4 align-items-end d-flex">
              </div>
          </div>
      </div>
     )
}

export default Search;