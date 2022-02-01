import Detail from "./components/page/Detail";
import Home from "./components/page/Home";
// import SortFilter from "./components/page/SortFilter";s
import Login from "./components/page/Login";
import About from "./components/page/About";
import Search from "./components/page/Search";
import Profile from "./components/page/Profile";
import Popular from "./components/page/Popular";
import TopRated from "./components/page/TopRated";
import SortFilter from "./components/page/SortFilter";
import Contact from "./components/page/Contact";
// import NotFound from "./page/NotFound";

export const routes = [
  {name: "Home", pathname: "/", element: Home, isNav:true},
  {name: "Movies", pathname: "/sort-filter/top-rated", element: TopRated, isNav:true},
  {name: "Movies", pathname: "sort-filter/popular", element: Popular, isNav:true},
  {name: "Movies", pathname: "movies/sort-filter/popular", element: Popular, isNav:true},
  {name: "Contact", pathname: "/contact", element: Contact, isNav:true},
  // {name: "Movies", pathname: "/movies", element: Movies, isNav:true},
  {name: "Profile", pathname: "/profile", element: Profile, isNav:true},
  {name: "Login", pathname: "/login", element: Login, isNav:true},
  {name: "Detail", pathname: "/detail/:detailId", element: Detail, isNav:false},
  {name: "SortFilter", pathname: "/latest/:detailId", element: SortFilter, isNav:false},
  {name: "About", pathname: "/about", element: About, isNav:false},
  {name: "Search", pathname: "/search", element: Home, isNav:false},

]