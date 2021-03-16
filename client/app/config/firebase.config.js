import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAl4VN_sDbD4eIAkW6_ynSKNt1-O5L0oNk',
  authDomain: 'for-sensitive-people.firebaseapp.com',
  databaseURL: 'https://for-sensitive-people-default-rtdb.firebaseio.com/',
  projectId: 'for-sensitive-people',
  storageBucket: 'gs://for-sensitive-people.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
