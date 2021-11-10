import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.congig";

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;