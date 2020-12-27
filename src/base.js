import firebase from 'firebase'
import 'firebase/storage'




const firebaseConfig = ({
  "projectId": "parshv",
  "appId": "1:740945958131:web:922e04e3269da5064a1386",
  "storageBucket": "parshv.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyBMtdx2spPTl_zMzjdGwEOYBvLelCwC7S4",
  "authDomain": "parshv.firebaseapp.com",
  "messagingSenderId": "740945958131"
});

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider,firebaseApp };
export default db ; 