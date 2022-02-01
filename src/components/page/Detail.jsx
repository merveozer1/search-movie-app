import { useParams } from "react-router-dom"
import { useQuery } from 'react-query';
import { fetchSingleMovie, fetchSingleMovieCredits, fetchReviews } from "../../api"

const Detail = (props) => {
  const detail = useParams()
  console.log(detail.detailId)
  const reviewsQuery = useQuery(["reviews", detail.detailId], () => fetchReviews(detail.detailId), { retry: false, select: state => state?.data })
  console.log("REVIEWS:::", reviewsQuery)

  const movieQuery = useQuery(["movie", detail.detailId], () => fetchSingleMovie(detail.detailId), { retry: false, select: state => state?.data })
  console.log("movieQuery:::", movieQuery)
  const movieCreditsQuery = useQuery(["moviecredits", detail.detailId], () => fetchSingleMovieCredits(detail.detailId), { retry: false, select: state => state?.data })
  console.log("movieCast:::", movieCreditsQuery)
  const movieData = movieQuery?.data

  const reviewsData = reviewsQuery?.data
  console.log("Reviews:::", reviewsData)
  const movieCastData = movieCreditsQuery?.data?.cast
  const movieCrewData = movieCreditsQuery?.data?.crew
  const crewList = ["director", "producer"]

  return (
    <>
      <div className="container">
        <div className="row" >
          <div className="col-sm-5"  >
            <img key={movieData?.id} style={{ width: '18rem' }} src={`https://image.tmdb.org/t/p/w500` + movieData?.poster_path === null ? `https://tigres.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png` : `https://image.tmdb.org/t/p/w500` + movieData?.poster_path} alt="" /></div>
          <div className="col-sm-7">
            <div className="col-sm-6" >
              <h2 >{movieData?.title}</h2>
              <h6> {movieData?.overview}</h6>
              <h6>Movie Released Date: {movieData?.release_date}</h6>
              <h6 >Genre: {movieData?.genres.map(item => <span key={item?.id} >{item.name} </span>)}</h6>
            </div>
            {
              movieCrewData?.filter(item => crewList.includes(item.job.toLowerCase())).map(item => <li key={item}> <strong>{item.job}</strong>: {item.name}</li>)
            }
          </div>
        </div>
      </div>
      <h4 className="my-3">Film Cast:</h4>
      <div className="container-fluid trending-app">
        <div className="row m-3 justify-content-start">

          {

            movieCastData?.map(item =>
              <img key={item} width={"120px"} height={"150px"} className="col-sm " src={item.profile_path === null ? `https://tigres.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png` : `https://image.tmdb.org/t/p/w200${item?.profile_path}`} alt="" />
              //<div >{item.name}</div>
              //     <div > {item.character}</div> 
            )
          }
        </div>
      </div>


      <div className='review-part t'>
        <h5>Reviews:</h5>
        <div>
       
          <h5>Author :
            {
              reviewsData?.results[0]?.author.toUpperCase()
            }
          </h5>
        </div> {
          reviewsData?.results[0]?.content?.slice(0, 1000)
        }..
        <br />
        <br></br>
        <br></br>
        <br></br>
      </div>


    </>
  )
};
export default Detail;