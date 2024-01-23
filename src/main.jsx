import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr9YJrAqGVKcPM-f-YwxvLHtTnsCazP2Q",
  authDomain: "gallery-a463c.firebaseapp.com",
  projectId: "gallery-a463c",
  storageBucket: "gallery-a463c.appspot.com",
  messagingSenderId: "97435089555",
  appId: "1:97435089555:web:4e44e8831b32d342b12b66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
