// import React from 'react';
import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import SafeAreaScreen from '../component/SafeAreaScreen';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import MoviesApi from '../api/movies';
import { event } from 'react-native-reanimated';
import MoviesScreen from './MovieScreen';
import { string } from 'yup';

function HomeScreen(props) {
  const [movies, setMovies] = useState();
  const [result, setResult] = useState();
  const [movieSearch, setMovieSearch] = useState('');
  const [movieResult, setMovieResult] = useState(undefined);

  const search = async (value) => {
    const result = await MoviesApi.searchName(value);
    if (!result.ok) return setResult(result.data);
  };

  const searchType = async (movie) => {
    const result = await MoviesApi.search(movie);
    if (!result.ok) return setMovies(result);
  };

  useEffect(() => {
    MoviesApi.apiMdb
      .get(
        `/${movies}?api_key=${Constants.manifest.extra.TMDB_API_KEY}&language=en-US&query=${movieSearch}&page=1&include_adult=false`
      )
      .then((response) => {
        let result = response.data.results;
        setMovieResult(result);
        console.log(result);
        console.log('************************');
      })
      .catch((err) => console.log(err));
  }, [movieSearch]);

  searchType('movie');
  search('jack reacher');

  let movieTitle;
  let poster;
  let backdrop;

  if (movieResult !== undefined) {
    movieTitle = movieResult[0].original_title;
    poster = (
      <Image
        style={styles.images}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movieResult[0].poster_path}`,
        }}
      ></Image>
    );
    backdrop = (
      <Image
        style={styles.images}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movieResult[0].backdrop_path}`,
        }}
      ></Image>
    );
  }

  return (
    <SafeAreaScreen>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <View style={styles.container}>
              <TextInput
                style={styles.textInput}
                value={movieSearch}
                onChangeText={(text) => setMovieSearch(text)}
              ></TextInput>
              <Text>{movieTitle}</Text>
              {backdrop}
              {poster}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 50,
    height: '100%',
  },
  images: {
    width: 300,
    height: 550,
    marginTop: 20,
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    marginTop: 20,
  },
});

export default HomeScreen;

// useEffect(() => {
//     MoviesApi.apiMdb
//       .get(
//         `/${movies}?api_key=${Constants.manifest.extra.TMDB_API_KEY}&language=en-US&query=${movieSearch}&page=1&include_adult=false`
//       )
//       .then((response) => {
//         let result = response.data.results;
//         setMovieResult(result);
//         if (result) {
//           console.log(result);
//           console.log('++++++++++++++++++++++++++++');
//         }
//       })
//       .catch((e) => console.log(e));
//   }, [movieSearch]);

//   console.log(movieResult);

//   let movieTitle;
//   let poster;

//   if (movieResult) {
//     movieTitle = <Text>{movieResult.original_title}</Text>;
//     poster = (
//       <Image
//         style={styles.images}
//         source={{
//           uri: `https://image.tmdb.org/t/p/w500/${movieResult.poster_path}`,
//         }}
//       ></Image>
//     );
//   }

//   console.log(movieResult.original_title);

//   MoviesApi.apiMdb
//     .get(
//       `/${movies}?api_key=${Constants.manifest.extra.TMDB_API_KEY}&language=en-US&query=jack+reacher&page=1&include_adult=false`
//     )
//     .then((response) => {
//       let result = response.data.results;
//       setMovieResult(result[0]);
//       console.log(result[0].original_title);
//       console.log('++++++++++++++++++++++++++++');
//     });

//   console.log();
//   MoviesApi.imdbImage
//     .get(`/zlyhKMi2aLk25nOHnNm43MpZMtQ.jpg`)
//     .then((response) => {
//       setMoviePoster(response);
//       //   console.log(response);
//       //   console.log('########################');
//     });
//   console.log(moviePoster);
//   console.log(movies);
//   console.log(Constants.manifest.extra.TMDB_API_KEY);
//   console.log(result);

//   console.log(movieSearch);
