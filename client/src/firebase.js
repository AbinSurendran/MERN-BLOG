// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7d5af.firebaseapp.com",
  projectId: "mern-blog-7d5af",
  storageBucket: "mern-blog-7d5af.appspot.com",
  messagingSenderId: "616848880723",
  appId: "1:616848880723:web:be387efb19ce0b436d42a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);