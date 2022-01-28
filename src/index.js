import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBDjw2Wz7njeTctJTAbIbHDrRomNsD-5Tg",
  authDomain: "tech-store-41643.firebaseapp.com",
  projectId: "tech-store-41643",
  storageBucket: "tech-store-41643.appspot.com",
  messagingSenderId: "740112388940",
  appId: "1:740112388940:web:471ad761f16409527635e9"
};

const app = initializeApp(firebaseConfig);


ReactDOM.render(
    <App />,
  document.getElementById('root'));


