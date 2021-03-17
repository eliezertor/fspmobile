import React from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';

import FspButton from '../compnents/FspButton';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={3}
      source={require('../assets/movie-back.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>

      <View style={styles.buttonContainer}>
        <FspButton
          title="Login"
          color="Primary"
          onPress={() => navigation.navigate('Login')}
        />
        <FspButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  logo: { width: 160, height: 100 },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
  },
});

export default WelcomeScreen;
