import React from 'react';
import { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import { fetchDiscoverMovies } from "../../api"
import { useQuery } from "react-query";
import { Link } from 'react-router-dom';
import { MdExplore } from "react-icons/md"
import Icons from "./Icons"
import '../../styledComponent/index.css';
import {useSelector} from 'react-redux';

function Discover(props) {
  function MouseOver(event) {
    event.target.style.margin = '20px'
  }
  function MouseOut(event) {
    event.target.style.margin = ''
  }
  const [search] = useState("");
  const [setCurrentPageData] = useState([]);
  const { data } =
    useQuery("movie", fetchDiscoverMovies, {
      select: (data) => data.data.results,
      retry: false,
    });
const state  = useSelector(state => state)
useEffect(() =>{
  console.log("state:::", state.user.favoritesList.favoritesFilms);

}, [state])
  useEffect(() => {
    if (search !== "") {
      setCurrentPageData(
        data?.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <>
      <h4 className='text'>
        Disc
        < MdExplore />
        ver
      </h4>
      <div className="container-fluid discover-app">
        <div className="row m-3 justify-content-start">
          {
            data?.map((item) => (
              <div key={item.id} className="col-sm" >
                <Card>
                  <Link to={"/detail/" + item.id} style={{ textDecoration: "none" }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500` + item.poster_path} style={{ width: '290px', height: '420px' }} onMouseOver={MouseOver} onMouseOut={MouseOut} />
                  </Link>
                  <Card.Body style={{ width: '18rem', height: '15rem' }} className="d-flex flex-column justify-content-end" >
                    <Card.Title className="text-muted">{item.title}</Card.Title>
                    <Card.Text className="text-muted">
                      RELEASE DATE: {item.release_date}
                    </Card.Text>
                    <Card.Text className="text-muted flex-fill" >
                      IMDB SCORE: {item.vote_average}
                    </Card.Text>
                    <Card.Text className=""> { < Icons movieId={item.id} movieTitle={item.title} isFavorite={state.user.favoritesList.favoritesFilms.some((x) => x.id === item.id ? true : false)} /> }
                
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </>)
}

export default Discover