import firebase from '../config/firebase.config';
import Constants from 'expo-constants';
import jwt_decode from 'jwt-decode';

import emailVerification from './emailValidation';
import authStorage from './authStorage';

// Creates a user with builtin Firebase Method
const newUser = async ({ email, password }) => {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      /**
       * ! TODO: sign in user once account is created
       */
      let user = userCredential.user;
      console.log(user);

      // Calls builtin Firebase Method to validate users email
      if (user) emailVerification.emailVerification(user);
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      // ..
    });
};

// Looks at database and returns a user with builtin Firebase Method
const signIn = ({ email, password }) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      /**
       * ! TODO: sign in user once signed in
       */
      var user = userCredential.user;
      // If there is a user a token is requested
      if (user) setToken(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
    });
};

// Gets token from Firebase
const setToken = async () => {
  await firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      user.getIdToken().then(function (idToken) {
        // If there is a token the token will be passed to and stored
        authStorage.storeToken(idToken);
      });
    }
  });
};

// signs out user and calls remove token to delete token
const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      authStorage.removeToken();
      setUser(null);
    })
    .catch((error) => {
      // An error happened.
    });
};

export default { newUser, signIn, signOut };
