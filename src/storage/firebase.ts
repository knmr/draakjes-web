import firebase from 'firebase/app';
import 'firebase/database';

// Get a Firestore instance
export const db = firebase.initializeApp({ databaseURL: 'https://draakjes-cc9ab.firebaseio.com' }).database();
