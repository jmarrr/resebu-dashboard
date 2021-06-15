import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyBxFlaCvteNX9NvoabaxD7IVVVM41MiHvk",
	authDomain: "resebu-2949c.firebaseapp.com",
	projectId: "resebu-2949c",
	storageBucket: "resebu-2949c.appspot.com",
	messagingSenderId: "500116857920",
	appId: "1:500116857920:web:686d9567c5263e788d6ba5",
	measurementId: "G-93JZ9GPG0W"
};

firebase.initializeApp(firebaseConfig);

export default firebase;