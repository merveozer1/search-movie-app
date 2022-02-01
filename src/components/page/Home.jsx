import React from 'react';
import Trending from './Trending';
import Discover from './Discover';
import Search from '../page/Search';
import Pagination from './Pagination';
import { useLocation } from 'react-router-dom';
const Home = (props) => {

const location = useLocation()
  return (
    <>
      < Search />
      {location.pathname === '/search' ? < Pagination /> : <>  < Discover />
      < Trending /> </> }
    </>
  )
};

export default Home;