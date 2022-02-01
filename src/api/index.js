import axios from "axios";
const API_KEY = "7593f05ab745408d769fe17bdfa6bc30";
const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3"})

export const fetchSearchMovies = (searchValue) => BASE_AXIOS.get(`/search/movie?api_key=${API_KEY}&query=${searchValue}`);

export const fetchDiscoverMovies = () => BASE_AXIOS.get(`/discover/movie?api_key=${API_KEY}&page=1`);

export const fetchSingleMovie = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);

export const fetchTrendingMovies = (time_window) => BASE_AXIOS.get(`/trending/movie/${time_window}?api_key=${API_KEY}&page=1`);
export const fetchTopRatedMovies = (period) => BASE_AXIOS.get(`/movie/top_rated?api_key=${API_KEY}&page=${period}`);
export const fetchPopularMovies = () => BASE_AXIOS.get(`/movie/popular?api_key=${API_KEY}&page=1`);

// export const fetchPeopleMovies = (personId) => BASE_AXIOS.get(`/person/movie/${personId}?api_key=${API_KEY}&page=1`);
export const fetchSingleMovieCredits = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)

export const fetchReviews = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`)

export const fetchMovies = (movieId) => BASE_AXIOS.get(`movie/${movieId}?api_key=${API_KEY}&page=1`);

export const fetchLatestMovies = (movieId) => BASE_AXIOS.get(`movie/latest/${movieId}?api_key=${API_KEY}&page=1`);


export const fetchMovieGenres = () =>BASE_AXIOS.get(`/genre/movie/list?api_key=${API_KEY}`);

