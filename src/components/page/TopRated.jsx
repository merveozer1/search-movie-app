import React from 'react';
import { useState, useEffect } from "react";
import SortFilter from "./SortFilter";
import { fetchTopRatedMovies } from "../../api"
import { useQueries } from "react-query";
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap'
import Icons from "./Icons"
function TopRated(props){
    const [period, setPeriod] = useState([1]);
    console.log("props", props);
    const data  = useQueries(
        period.map(item=> {
            return {
              queryKey: ["movies",item],
              queryFn: () => fetchTopRatedMovies(item)
            }
          })
       
        );
        console.log("data", data)
        
        useEffect(() => {
            data[0]?.refetch()
    }, []);

    useEffect(() => {
        data[period.length]?.refetch()
      
      }, [period]);

    console.log(period);
 return (
 <>
 < SortFilter />
 <div className="container-fluid top-rated-app" >
 <div className="row m-3 justify-content-start" >
 {
data?.map(item => item?.data?.data?.results?.map((item) => (
    <div key={item.id} className="col-sm" >
      <Card>
        <Link to={"/detail/" + item.id} style={{ textDecoration: "none" }}>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500` + item.poster_path}  />
        </Link>
        <Card.Body style={{ width: '18rem', height: '15rem' }} className="d-flex flex-column justify-content-end py-3" >
          <Card.Title className="text-muted">{item.title}</Card.Title>
          <Card.Text className="text-muted">
            RELEASE DATE: {item.release_date}
          </Card.Text>
          <Card.Text className="text-muted flex-fill" >
            IMDB SCORE: {item.vote_average}
          </Card.Text>
          <Card.Text className=""> { < Icons movieId = {item.id} movieTitle = { item.title }/>} 
              </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )))
}
</div>
</div>
<button onClick={() => setPeriod([...period, period.length+1]) }> Load More </button>
 </>
 )
}

export default TopRated