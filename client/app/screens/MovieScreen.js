import React from 'react';
import { View, StyleSheet } from 'react-native';

import SafeAreaScreen from '../compnents/SafeAreaScreen';

function MovieScreen(props) {
  return (
    <SafeAreaScreen>
      <View style={styles.container}></View>;
    </SafeAreaScreen>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default MovieScreen;
