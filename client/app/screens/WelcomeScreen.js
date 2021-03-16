import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../config/colors';

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
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.register}>
          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </Text>
        </TouchableOpacity>
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
    marginBottom: 30,
    width: '100%',
  },
  login: { width: '100%', alignItems: 'center' },
  register: { width: '100%', alignItems: 'center' },
  loginText: {
    backgroundColor: colors.Primary,
    borderRadius: 15,
    color: 'white',
    fontSize: 20,
    height: 45,
    marginVertical: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '80%',
  },
  registerText: {
    backgroundColor: colors.secondary,
    borderRadius: 15,
    color: 'white',
    fontSize: 20,
    height: 45,
    marginVertical: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '80%',
  },
});

export default WelcomeScreen;
