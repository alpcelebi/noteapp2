import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC63adHVJRTghZEFJN72EmcSKqbDvMaFcw",
  authDomain: "ileri-react-redux-19d68.firebaseapp.com",
  databaseURL: "https://ileri-react-redux-19d68-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ileri-react-redux-19d68",
  storageBucket: "ileri-react-redux-19d68.appspot.com",
  messagingSenderId: "14294570421",
  appId: "1:14294570421:web:0f8967a94d179ad0b5f5fc"
};

const app=initializeApp(firebaseConfig);

// Firestore örneğini direkt olarak al
const db=getFirestore(app);

const auth=getAuth(app);

export {db,auth};
