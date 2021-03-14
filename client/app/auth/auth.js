import * as firebase from 'firebase';
import Constants from 'expo-constants';

firebase.initializeApp(Constants.manifest.extra.firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user != null) {
    console.log('We are authenticated now!');
  }
});
