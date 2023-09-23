import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBA6T3K7VvpUYtttQlOYtFki-tvJHTUdyM",
  authDomain: "clase-firebase-35706.firebaseapp.com",
  projectId: "clase-firebase-35706",
  storageBucket: "clase-firebase-35706.appspot.com",
  messagingSenderId: "917502054972",
  appId: "1:917502054972:web:9c22187bc7a3635c372939"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



