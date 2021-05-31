import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SafeAreaScreen from '../component/SafeAreaScreen';

function TvScreen(props) {
  return (
    <SafeAreaScreen style={{ flex: 1, backgroundColor: '#8D918D' }}>
      <View style={styles.container}>
        <Text>Tv!</Text>
      </View>
    </SafeAreaScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});

export default TvScreen;
