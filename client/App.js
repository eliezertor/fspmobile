import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { StatusBar } from 'expo-status-bar';
// import Constants from 'expo-constants';
import { AppLoading } from 'expo';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import MoviesApi from './app/api/movies';
// import LoginScreen from './app/screens/LoginScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';
// import RegisterScreen from './app/screens/RegisterScreen';
// import AuthStorage from './app/auth/authStorage';
import AuthNavigator from './app/screens/AuthNavigator';
import loginOut from './app/auth/loginOut';
import AuthContext from './app/auth/context';
import AppNavigator from './app/screens/AppNavigator';
// import loginOut from './app/auth/loginOut';

const Stack = createStackNavigator();

export default function App() {
  // const auth = loginOut();

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  // if (!isReady)
  //   return (
  //     <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
  //   );
  console.log(user, 'Appp user');

  const restoreUser = async () => {
    let user = await authStorage.getUser();
    if (user) setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {/* {user ?  */}
        <AppNavigator />
        {/* : <AuthNavigator />} */}
      </NavigationContainer>
    </AuthContext.Provider>
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

// const [movies, setMovies] = useState();
// const [result, setResult] = useState();

// const search = async (value) => {
//   const result = await MoviesApi.searchName(value);
//   if (!result.ok) return setResult(result.data);
// };

// const searchType = async (movie) => {
//   const result = await MoviesApi.search(movie);
//   if (!result.ok) return setMovies(result);
// };

// if (!isReady)
//   return (
//     <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
//   );

// MoviesApi.apiMdb
//   .get(
//     `/${movies}?api_key=${Constants.manifest.extra.TMDB_API_KEY}&language=en-US&query=jack+reacher&page=1&include_adult=false`
//   )
//   .then((response) => {
//     console.log(response.data);
//   });

// console.log(movies);
// console.log(Constants.manifest.extra.TMDB_API_KEY);
// console.log(result);

// searchType('movie');
// search('jack reacher');
