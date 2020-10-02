import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDT2nCtrlKWaREGaGLpwF6FQtg4a6hUOVc",
    authDomain: "crown-db-shop-532ad.firebaseapp.com",
    databaseURL: "https://crown-db-shop-532ad.firebaseio.com",
    projectId: "crown-db-shop-532ad",
    storageBucket: "crown-db-shop-532ad.appspot.com",
    messagingSenderId: "894821952144",
    appId: "1:894821952144:web:476777d34d36c1c61b8615"
  };

//call to firebase api
export const createUserProfileDocument = async (userAuth, additionalData) => {

  // USER
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
