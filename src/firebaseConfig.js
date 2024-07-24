// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPlhNCsWnvro6RSPx3Q8o20XHxyJFc2Sc",
  authDomain: "chat-application-b1544.firebaseapp.com",
  projectId: "chat-application-b1544",
  storageBucket: "chat-application-b1544.appspot.com",
  messagingSenderId: "174344849137",
  appId: "1:174344849137:web:3d489b9cc20a3d559f0b50",
  measurementId: "G-ZDNPHJMCDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);