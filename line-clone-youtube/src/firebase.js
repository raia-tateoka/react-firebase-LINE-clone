import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAPzhN_vngwr2C-ea_-JSEN-9gBoq3qiXU",
	authDomain: "line-clone-8e0f4.firebaseapp.com",
	projectId: "line-clone-8e0f4",
	storageBucket: "line-clone-8e0f4.appspot.com",
	messagingSenderId: "246323145644",
	appId: "1:246323145644:web:96af268813b7a4f3496809"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };