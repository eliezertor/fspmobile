import firebase from '../config/firebase.config';
import Constants from 'expo-constants';

const newUser = async ({ email, password }) => {
  // console.log(email, password," in new user");
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      console.log(user);
      if (user) emailVerification(user);
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
      console.log(user.providerData, user.emailVerified);
      if (user) setToken(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
    });
};

const setToken = (user) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      user.getIdToken().then(function (idToken) {
        console.log(idToken);
      });
    }
  });
};

const emailVerification = (user) => {
  var user = firebase.auth().currentUser;

  user
    .sendEmailVerification()
    .then(function () {
      // Email sent.
      console.log('email sent');
    })
    .catch(function (error) {
      // An error happened.
    });
};

const signOut = (user) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log(`${user} signed out`);
      setUser(null);
    })
    .catch((error) => {
      // An error happened.
    });
};

// firebase.auth().onAuthStateChanged((user) => {
//   if (user != null) {
//     console.log('We are authenticated now!');
//   }
// });

export default { newUser, signIn, signOut };
