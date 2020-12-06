import * as firebase from 'firebase';
import '@firebase/firestore';
import '@firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyDMNPey3E3v2THiSKrnVTArQWuwngxY0vk',
  authDomain: 'weather-297716.firebaseapp.com',
  projectId: 'weather-297716',
  storageBucket: 'weather-297716.appspot.com',
  messagingSenderId: '943086052219',
  appId: '1:943086052219:web:6dde4bdecbaff3f85553de',
  measurementId: 'G-DL4KVZ49CP',
};
// Initialize Firebase
irebase.initializeApp(firebaseConfig);

export { firebase };
