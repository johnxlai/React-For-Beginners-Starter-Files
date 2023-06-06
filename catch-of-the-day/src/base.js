import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDx9DS-bZQFBED20DgBo9kayf-mndYgtq0',
  authDomain: 'catch-of-the-day-john-lai.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-john-lai-default-rtdb.firebaseio.com',
  // projectId: 'catch-of-the-day-john-lai',
  // storageBucket: 'catch-of-the-day-john-lai.appspot.com',
  // messagingSenderId: '737796253628',
  // appId: '1:737796253628:web:25cbab7729fe0df420edb9',
  // measurementId: 'G-FWSVSDHWDE',
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default
export default base;
