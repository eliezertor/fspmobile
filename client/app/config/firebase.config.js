import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAnn4i6RTA0yrS8Md2DYwqjXkHzu4JpXNM',
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
