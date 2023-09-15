// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALLMidRC3ZgtGfoH0gc0DNPnLrVvkqnKc",
  authDomain: "twitter-clone-90d2a.firebaseapp.com",
  projectId: "twitter-clone-90d2a",
  storageBucket: "twitter-clone-90d2a.appspot.com",
  messagingSenderId: "1008139801311",
  appId: "1:1008139801311:web:2e75e2abcb6f0dad164f6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;