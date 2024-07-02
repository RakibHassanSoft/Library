// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAZJw00GNWHUM92kJG-yEHG_-ZtnW5uTE",
  authDomain: "library-1bf40.firebaseapp.com",
  projectId: "library-1bf40",
  storageBucket: "library-1bf40.appspot.com",
  messagingSenderId: "331168437703",
  appId: "1:331168437703:web:fa75ae401fbddbfbe435e2",
};
// const firebaseConfig = {
  // apiKey:import.meta.VITE_apiKey,
  // authDomain:import.meta.VITE_authDomain,
  // projectId:import.meta.VITE_projectId,
  // storageBucket:import.meta.VITE_storageBucket,
  // messagingSenderId:import.meta.VITE_messagingSenderId,
  // appId:import.meta.VITE_appId,
// }
/**
 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.VITE_apiKey,
  authDomain:import.meta.VITE_authDomain,
  projectId:import.meta.VITE_projectId,
  storageBucket:import.meta.VITE_storageBucket,
  messagingSenderId:import.meta.VITE_messagingSenderId,
  appId:import.meta.VITE_appId,
};
 */

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;