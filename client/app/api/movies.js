import { create } from 'apisauce';
import Constants from 'expo-constants';

// TODO: add variable after /3/ to define what type of object we will retrieve {movie/tv/search/list} etc.

let searchValue;
let movieValue;

const search = (typeOfSearch) => {
  searchValue = typeOfSearch;
  return searchValue;
};

const searchName = (value) => {
  movieValue = value;
  return movieValue;
};

const latestMovies = create ({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=7d3e782cf46f7d311accd6d0e6d7ba30&language=en-US&page=1`
})
const apiMdb = create({
  baseURL: `https://api.themoviedb.org/3/search`,
});

const imdbImage = create({
  baseURL: `https://image.tmdb.org/t/p/w500/`,
});

export default { search, create, searchName, apiMdb, imdbImage, latestMovies };
