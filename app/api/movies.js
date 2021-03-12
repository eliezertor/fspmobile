import { create } from 'apisauce';
// import { TMDB_API_KEY } from '@env';
// import 'dotenv/config';
import Constants from 'expo-constants';

// TODO: add variable after /3/ to define what type of object we will retrieve {movie/tv/search/list} etc.

const search = (typeOfSearch) => {
  const searchValue = typeOfSearch;
//   console.log(Constants.manifest.extra.TMDB_API_KEY, searchValue);
  return searchValue;
};

// const apiMdb = create({
//   baseURL: `https://api.themoviedb.org/3/search/${searchValue}?api_key=${TMDB_API_KEY}`,
// });

export default { search, create };
