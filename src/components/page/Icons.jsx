import React from "react";
import "../../styledComponent/index.css"
import { addFavList, addSeenList } from "../../reduxStore/users"
import { useDispatch } from 'react-redux'

const Icons = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flexbox">
        <div className="fav-btn">
          <div className="favme" style={{ display: "flex", flexDirection: "column", width: "auto", margin: "auto" }}>
            <button style={{ margin: "5px" }} onClick={() => dispatch(addFavList(props.movieId, props.movieTitle))}>
              <svg className="h-8 w-8 text-red-500" width={'20px'} height={'20px'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button style={{ margin: "5px" }} onClick={() => dispatch(addSeenList(props.movieId, props.movieTitle))}>
              <svg className="h-8 w-8 text-red-500" width={'20px'} height={'20px'} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Icons;