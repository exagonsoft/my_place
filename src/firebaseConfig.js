// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSVQEfOPZzl1G-EVDgksrWoUeLLXkylsg",
  authDomain: "alvaro-test-12fba.firebaseapp.com",
  projectId: "alvaro-test-12fba",
  storageBucket: "alvaro-test-12fba.appspot.com",
  messagingSenderId: "307279200030",
  appId: "1:307279200030:web:e805f2213ad1340691530f",
  measurementId: "G-F45VZ1ZTC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);