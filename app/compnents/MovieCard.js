import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import SafeAreaScreen from './SafeAreaScreen';

function MovieCard({
  poster,
  title,
  director,
  overview,
  vote_average,
  vote_count,
  id,
  release_date,
  genres,
}) {
  return (
    <SafeAreaScreen>
      <View style={styles.container}></View>;
    </SafeAreaScreen>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default MovieCard;
