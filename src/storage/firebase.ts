import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBOW9WdpwzyNMuY9SGJMW8ptsme9XD4BOQ',
	appId: 'draakjes-cc9ab',
	databaseURL: 'https://draakjes-cc9ab.firebaseio.com/',
};

// Get a Firestore instance
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.database();
export const auth = firebase.auth(firebaseApp);
