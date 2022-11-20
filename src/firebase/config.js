import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0m0NdgYQCziaeDv5nc5xAd4kzt-ZiReo",
  authDomain: "miniblog-85045.firebaseapp.com",
  projectId: "miniblog-85045",
  storageBucket: "miniblog-85045.appspot.com",
  messagingSenderId: "63595424827",
  appId: "1:63595424827:web:2c04188043a032aaed801e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};