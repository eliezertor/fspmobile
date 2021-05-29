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

const apiMdb = create({
  baseURL: `https://api.themoviedb.org/3/search`,
});

const imdbImage = create({
  baseURL: `https://image.tmdb.org/t/p/w500/`,
});

export default { search, create, searchName, apiMdb, imdbImage };
