// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByRkEKyxiWqlT1GRC5fDC8KzA1XfFYcsw",
  authDomain: "netflixgptclone-41e6d.firebaseapp.com",
  projectId: "netflixgptclone-41e6d",
  storageBucket: "netflixgptclone-41e6d.appspot.com",
  messagingSenderId: "252465388966",
  appId: "1:252465388966:web:1763626dc44f0c7e99c367",
  measurementId: "G-XJCW2RM7QG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//console.log(analytics);

export const auth = getAuth();