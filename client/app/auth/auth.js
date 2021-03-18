import firebase from '../config/firebase.config';
import Constants from 'expo-constants';
import jwt_decode from 'jwt-decode';

import emailVerification from './emailValidation';
import authStorage from './authStorage';

const newUser = async ({ email, password }) => {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      console.log(user);
      if (user) emailVerification.emailVerification(user);
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      // ..
    });
};

const signIn = ({ email, password }) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // console.log(user.providerData, user.emailVerified);
      if (user) setToken(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
    });
};

const setToken = async (user) => {
  await firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      user.getIdToken().then(function (idToken) {
        authStorage.storeToken(idToken);
      });
    }
  });
};

const signOut = (user) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      // console.log(`${user} signed out`);
      authStorage.removeToken();
      setUser(null);
    })
    .catch((error) => {
      // An error happened.
    });
};


export default { newUser, signIn, signOut };
