import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import SafeAreaScreen from '../component/SafeAreaScreen';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import MoviesApi from '../api/movies';
import { event } from 'react-native-reanimated';
// import MoviesScreen from './MovieScreen';
import { string } from 'yup';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

function MoviesScreen(props) {

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
      })
      .catch((err) => console.log(err));
  }, [movieSearch]);

  searchType('movie');
  search('jack reacher');

  let movieTitle;
  let poster;
  let backdrop;

  if (movieResult !== undefined) {
    if (movieResult[0] !== undefined) {
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
    } else {
      poster = <Text> Sorry nothing matched!</Text>;
    }
  }

  return (
    <SafeAreaScreen style={{ flex: 1, backgroundColor: '#8D918D' }}>
      <ScrollView>
        <StatusBar animated={true} hidden={true} />
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
      </ScrollView>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  // scroll: { height: 205 },
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#8D918D',
  },
  images: {
    width: 300,
    height: 550,
    marginTop: 20,
  },
  textInput: {
    width: width - 20,
    height: 50,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 5,
  },
});

export default MoviesScreen;
