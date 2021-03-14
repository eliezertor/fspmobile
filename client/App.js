import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MoviesApi from './app/api/movies';
import Constants from 'expo-constants';

export default function App() {
  const [movies, setMovies] = useState();
  const [result, setResult] = useState();

  const search = async (value) => {
    const result = await MoviesApi.searchName(value);
    if (!result.ok) return setResult(result.data);
  };

  const searchType = async (movie) => {
    const result = await MoviesApi.search(movie);
    if (!result.ok) return setMovies(result);
  };

  MoviesApi.apiMdb
    .get(
      `/${movies}?api_key=${Constants.manifest.extra.TMDB_API_KEY}&language=en-US&query=jack+reacher&page=1&include_adult=false`
    )
    .then((response) => {
      console.log(response.data);
    });

  // console.log(movies);
  // console.log(Constants.manifest.extra.TMDB_API_KEY);
  console.log(result);

  searchType('movie');
  search('jack reacher');

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
