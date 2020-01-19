import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDCmRsekMmCava0l3-SvSft7ZueS7-arqA",
  authDomain: "crwn-db-518e1.firebaseapp.com",
  databaseURL: "https://crwn-db-518e1.firebaseio.com",
  projectId: "crwn-db-518e1",
  storageBucket: "crwn-db-518e1.appspot.com",
  messagingSenderId: "489671247116",
  appId: "1:489671247116:web:b4787215f65c474cdf7529"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;