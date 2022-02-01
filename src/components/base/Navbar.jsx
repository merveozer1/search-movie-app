import React from "react";
import { Link } from 'react-router-dom';
// import routes from "../../routes"
import ChangeThemeButton from "../ChangeThemeButton";
import { BiLogIn } from "react-icons/bi"
import { BiLogOut } from "react-icons/bi"
import { FaRegUserCircle } from "react-icons/fa"
import { Container, Col, Row } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { logoutUser } from "../../reduxStore/users";
import { useDispatch } from "react-redux";


const Navbar = (props) => {
  const openDropdown = () => {
    document.getElementById("movies-dropdown").classList.add("d-block")
  }
  const closeDropdown = () => {
    document.getElementById("movies-dropdown").classList.remove("d-block")
  }
  function MouseOver(event) {
    event.target.style.background = 'white';
    event.target.style.borderRadius = '8px'
  }
  function MouseOut(event) {
    event.target.style.background = "";
  }
  const { user } = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black  justify-content-center">
        <Link to="https://www.upschool.io/" className="navbar-brand" >
          <div className="col-sm fw-bold text-light border border-warning border-1 py-2" >
            <h6>UP School Capstone</h6>
          </div>
        </Link>
        <Container>
          <Col xs={3}>

            <div className="nav navbar-light justify-content-start" onMouseOver={MouseOver} onMouseOut={MouseOut} >
              <Link className="nav-item nav-link active text-warning fw-bold" to="/" >
                Home
              </Link>
              <Link className="nav-item nav-link active text-warning fw-bold" to="about">
                About
              </Link>
              <Link className="dropdown nav-item nav-link active text-warning fw-bold" to="/" onMouseEnter={openDropdown} onMouseLeave={closeDropdown} >
                Movies

                <ul id="movies-dropdown" className="dropdown-menu position-absolute top-100">
                  <li><Link className="dropdown-item" to="sort-filter/popular">Popular</Link></li>
                  <li><Link className="dropdown-item" to="sort-filter/top-rated">Top Rated</Link></li>
                </ul>
              </Link>
            </div>
          </Col>

          <Row xs={3}>
            <ChangeThemeButton />

            {
              !user.userLogin ?
                <Link className="nav-item nav-link active text-light fw-bold " to="login">
                  <BiLogIn />
                </Link>
                : <> <Link className="nav-item nav-link active text-light fw-bold " to="profile">
                  < FaRegUserCircle />
                </Link>
                  <Link className="nav-item nav-link active text-light fw-bold " to="login" onClick={() => dispatch(logoutUser())} >
                    <BiLogOut />
                  </Link>
                </>
            }

          </Row>
        </Container>
      </nav>
    </>
  )
};

export default Navbar;