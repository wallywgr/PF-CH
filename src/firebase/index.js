import firebase from 'firebase/app';
import 'firebase/firestore';


const app = firebase.initializeApp({
      apiKey: "AIzaSyA1YfD_paUSUK4oVStRvLsK914Av9OHtGk",
      authDomain: "final-d65ca.firebaseapp.com",
      projectId: "final-d65ca",
      storageBucket: "final-d65ca.appspot.com",
      messagingSenderId: "152429220774",
      appId: "1:152429220774:web:10ac79a831178bd6147567"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}