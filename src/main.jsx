import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXBMz7T464hExXDE8iSn7z1S1cgQ9QTT0",
  authDomain: "proyectofinal-react-code.firebaseapp.com",
  projectId: "proyectofinal-react-code",
  storageBucket: "proyectofinal-react-code.appspot.com",
  messagingSenderId: "492846098025",
  appId: "1:492846098025:web:97c511c24143760d2d64f8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
