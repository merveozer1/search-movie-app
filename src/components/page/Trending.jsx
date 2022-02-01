import React from 'react';
import { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap';
import { fetchTrendingMovies } from "../../api"
import { useQuery } from "react-query";
import { Link } from 'react-router-dom';
import { HiTrendingUp } from "react-icons/hi"
import '../../styledComponent/index.css';
import Icons from "./Icons"

function Trending(props) {
  function MouseOver(event) {
    event.target.style.margin = '20px'
  }
  function MouseOut(event) {
    event.target.style.margin = ''
  }

  const [period, setPeriod] = useState("day");
  // eslint-disable-next-line no-unused-vars
  const [currentPageData, setCurrentPageData] = useState([]);
  console.log("props", props);
  const { data } = useQuery(
    ["movies", period],
    () => fetchTrendingMovies(period),
    {

      retry: false,
    }
  );
  useEffect(() => {
    setCurrentPageData(data);
  }, [data]);
  console.log(period);


  return (
    <>
   
      <div className='container'>
        <div className="  text">
          <h3>
            < HiTrendingUp />
            Trending
          </h3>
          <Button variant="secondary" style={{margin: "3px", borderRadius: "20px"}}
            onClick={() => {
              setPeriod("day");
            }}
          >Today</Button>
          <Button variant="warning" style={{margin: "3px", borderRadius: "20px"}}
            onClick={() => {
              setPeriod("week");
            }}>Last Week</Button>
        </div>
      </div>

      <div className="container-fluid trending-app" >
<div className="row m-3 justify-content-start" >
      
      
          {
            data?.data?.results.map((item) => (
              <div key={item.id} className="col-sm " >
                  <Card>
                <Link className="text-decoration-none" to={"/detail/" + item.id + item.title}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500` + item.poster_path} style={{ width: '290px', height:'420px' }} onMouseOver={MouseOver} onMouseOut={MouseOut}/>
                </Link>
                    <Card.Body style={{ width: '18rem', height:'15rem' }} className="d-flex flex-column justify-content-end">
                      <Card.Title className="text-muted fw-bold ">{item.title}</Card.Title>
                      <Card.Text className="text-muted ">
                        RELEASE DATE: {item.release_date}
                      </Card.Text>
                      <Card.Text className="text-muted">
                        IMDB SCORE: {item.vote_average}
                      </Card.Text>
                      <Card.Text className=""> { < Icons movieId = {item.id} movieTitle = { item.title }/>} 
              </Card.Text>
                    </Card.Body>
                  </Card>
              </div>
            ))
}
      </div>
</div>
      
    </>
  );
};

export default Trending;