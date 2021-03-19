import * as SecureStore from 'expo-secure-store';
import jwt_decode from 'jwt-decode';

// Key value for secure store
const key = 'authToken';

// Saves token picked up from file auth.js, function setToken(). and saves in secure store.
const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log('Error storing the auth token', error);
  }
};

// Gets Token from secure store to be consumed.
const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log('Error getting the auth token', error);
  }
};

//Calls getToken() and return user credentials.
const getUser = async () => {
  const token = await getToken();
  return token ? jwt_decode(token) : null;
};

// Gets called by signOut() in file auth.js and deletes token from secure store.
const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
    console.log('Token removed');
  } catch (error) {
    console.log('Error removing the auth token', error);
  }
};

export default { getUser, storeToken, removeToken };
