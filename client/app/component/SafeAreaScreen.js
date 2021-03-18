import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet, SafeAreaView } from 'react-native';

function SafeAreaScreen({ children, style }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { paddingTop: Constants.statusBarHeigh, flex: 1 },
  view: { flex: 1 },
});

export default SafeAreaScreen;
