import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView, FlatList} from 'react-native';
import SafeAreaScreen from './SafeAreaScreen';

function MovieCard(movie) {
// console.log(movie)
//     if(movie !== undefined) {
    let popularMovies;

    if (popularMovies === undefined) {
        popularMovies = { original_titl: "sorry"}
    }
    if(movie !== undefined && typeof movie === "object") {
        // movie?.movie?.forEach(movie => popularMovies = movie)
        console.log('inside')
        console.log(typeof movie)
    }

    console.log(popularMovies)

  return (
    <SafeAreaScreen>
      {/*<ScrollView style={styles.container}>*/}
        <FlatList
        style={styles.flat}
        data={popularMovies}
        renderItem={({item}) => (
            <TouchableWithoutFeedback style={styles.container}>
                <Text style={styles.text}>TEXT</Text>
            </TouchableWithoutFeedback>

        )}
        />

      {/*</ScrollView>*/}
    </SafeAreaScreen>
  );
}
const styles = StyleSheet.create({
    flat:{
        flex: 1,
        backgroundColor: 'red'
    },
  container: {
      flex: 1,
      marginTop: 30,
      // alignItems: 'center'
      backgroundColor: 'blue',
  },
    text:{
      backgroundColor: 'purple',
        width: '100%',
        height: 50,
        marginTop: 60,
        // justifySelf: 'center',
        alignSelf: "center"
    }
});

export default MovieCard;
