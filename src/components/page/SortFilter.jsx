import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchLatestMovies } from "../../api"
import { useQuery } from "react-query";

const SortFilter = (props) => {
  const params = useParams()
  console.log(params)
  const dispatch = useDispatch()

  function favTutorial() {
    var mylist = document.getElementById("myList");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
  }
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());

  const [search, setSearch] = useState("");
  const [currentPageData, setCurrentPageData] = useState([]);
  const { isLoading, isError, error, isFetched, isFetching, data, ...query } =
    useQuery("movie", fetchLatestMovies, {
      select: (data) => data.data.results,
      retry: false,
    });

  // const genresQuery = useQuery("genres", () => fetchMovieGenres, { reply: false })
  //  console.log("GENRES:::", genresQuery)
  //  genresQuery?.data?.then((val) =>
  //    dispatch(getGenreFilter(val?.data?.genres))
  //  )

  const perPage = 10;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserList = () => {
      setLoading(true);
      fetch(`/genre/movie/list?api_key=7593f05ab745408d769fe17bdfa6bc30/per_page=${perPage}&page=${page}`)
        .then(res => res.json())
        .then(res => {
          setTotalPages(res.total_pages);
          setUserList([...userList, ...res.data]);
          setLoading(false);
        });
    }
    getUserList();
  }, [page]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="bg-black" style={{ width: 'auto', height: '100px', margin: "20px" }}>
              <form>
                <h5 className="text-secondary margin:initial" > Sort Results By </h5>
                <select id="myList" onChange={favTutorial} style={{ width: '234px', height: '36px', margin: 'initial' }}>
                  <option> Title (A-Z) </option>
                  <option> Title (Z-A) </option>
                  <option> Popularity Ascending</option>
                  <option> Popularity Descending</option>
                  <option> Release Date Ascending</option>
                  <option> Release Date Descending</option>
                  <option>Rating Ascending</option>
                  <option>Rating Descending</option>
                </select>
              </form>
            </Card>
          </Col>
          <Col>
            <h5 className="text-secondary" style={{ width: 'auto', height: '100px', margin: "20px" }}>From: <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></h5>
          </Col>
          <Col>
            <h5 className="text-secondary" style={{ width: 'auto', height: '100px', margin: "20px" }}>To: <DatePicker selected={finishDate} onChange={(date) => setFinishDate(date)} /></h5>
          </Col>
          <Row >
            <Col>
              <Button variant="btn btn-secondary" style={{ margin: "3px", borderRadius: "20px" }}>Action</Button>
              <Button variant="btn btn-secondary" style={{ margin: "3px", borderRadius: "20px" }}>Drama </Button>
              <Button variant="btn btn-secondary" style={{ margin: "3px", borderRadius: "20px" }}>Romance</Button>
              <Button variant="btn btn-secondary" style={{ margin: "3px", borderRadius: "20px" }}>Comedy</Button>
              <Button variant="btn btn-secondary" style={{ margin: "3px", borderRadius: "20px" }}>Adventure</Button>
              <Button variant="btn btn-secondary" style={{ margin: "3px", borderRadius: "20px" }}>Crime</Button>
            </Col>
          </Row>
        </Row>
      </Container>
      {/* {

        data?.map((item) => (
          <div key={item.id} className="col-sm" >
            <Card>
              <Link to={"/latest/" + item.id} style={{ textDecoration: "none" }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500` + item.poster_path} style={{ width: '290px', height: '420px' }} />
              </Link>
              <Card.Body style={{ width: '18rem', height: '15rem' }} className="d-flex flex-column justify-content-end" >
                <Card.Title className="text-muted">{item.title}</Card.Title>
                <Card.Text className="text-muted">
                  RELEASE DATE: {item.release_date}
                </Card.Text>
                <Card.Text className="text-muted flex-fill" >
                  IMDB SCORE: {item.vote_average}
                </Card.Text>
                <Card.Text className="">
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))} */}
      <div>
      </div>
      {totalPages !== page && <button className="btn-load-more" onClick={() => setPage(page + 1)}>
        {loading
          ? 'Loading...'
          : 'Load More'}
      </button>}
    </>
  )
};

export default SortFilter;