import * as SecureStore from 'expo-secure-store';
import jwt_decode from 'jwt-decode';

const key = 'authToken';

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log('Error storing the auth token', error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log('Error getting the auth token', error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwt_decode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
    console.log('Token removed');
  } catch (error) {
    console.log('Error removing the auth token', error);
  }
};

export default { getUser, storeToken, removeToken };
