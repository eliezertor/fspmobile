// import React from 'react';
import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TextInput } from 'react-native';
import SafeAreaScreen from '../component/SafeAreaScreen';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import MoviesApi from '../api/movies';
import { event } from 'react-native-reanimated';
import MoviesScreen from './MovieScreen';
// import LoginScreen from './app/screens/LoginScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';
// import RegisterScreen from './app/screens/RegisterScreen';
// import AuthStorage from './app/auth/authStorage';
// import loginOut from './app/auth/loginOut';

function HomeScreen(props) {
  const [movies, setMovies] = useState();
  const [result, setResult] = useState();
  const [movieSearch, setMovieSearch] = useState();
  const [movieResult, setMovieResult] = useState('');

  const search = async (value) => {
    const result = await MoviesApi.searchName(value);
    if (!result.ok) return setResult(result.data);
  };

  const searchType = async (movie) => {
    const result = await MoviesApi.search(movie);
    if (!result.ok) return setMovies(result);
  };

  let movieTitle;

  {
    if (movieResult) {
      movieTitle = <Text>{movieResult.original_title}</Text>;
    }
  }

  let posterPath;
  {
    if (movieResult) {
      posterPath = movieResult.poster_path;
    }
  }

  useEffect(() => {
    MoviesApi.apiMdb
      .get(
        `/${movies}?api_key=${Constants.manifest.extra.TMDB_API_KEY}&language=en-US&query=${movieSearch}&page=1&include_adult=false`
      )
      .then((response) => {
        let result = response.data;
        setMovieResult(result);
        console.log(result, '55');
        console.log('++++++++++++++++++++++++++++');
      });
  }, [movieSearch]);

  console.log(movieSearch);
  //   searchType('movie');
  //   search('jack reacher');

  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={styles.container}>
            {movieTitle}
            <TextInput
              style={styles.textInput}
              value={movieSearch}
              onChangeText={(text) => setMovieSearch(text)}
            ></TextInput>
            {/* <Image
              style={styles.images}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${posterPath}`,
              }}
            ></Image> */}
          </View>
        </View>
      </View>
    </SafeAreaScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    // alignContent: 'center',
    // justifyContent: 'center',
    // flex: 1,
    // alignItems: 'center',
    padding: 50,
  },
  images: {
    width: 300,
    height: 550,
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    marginTop: 20,
  },
});

export default HomeScreen;

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
