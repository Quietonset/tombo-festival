import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '../src/index.css';
import { MenuProvider } from './context/MenuContext.jsx';
import {initializeApp} from 'firebase/app'
import{
  collection,
  getFirestore,
  getDocs,
  doc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB6SFmRZR_5S0SXvYD6KrxyXF1SJeRaC6M",
  authDomain: "tombofest-deaa4.firebaseapp.com",
  projectId: "tombofest-deaa4",
  storageBucket: "tombofest-deaa4.appspot.com",
  messagingSenderId: "1091003512541",
  appId: "1:1091003512541:web:ad87c89da19568c5c60d34",
};

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db,'mail')

getDocs(colRef)
.then((snapshot)=>{
  // console.log(snapshot.docs);
  let emails = []
  snapshot.docs.forEach((doc)=>{
    emails.push({
      ...doc.data(), id: doc.id
    })
    console.log(emails)
  })
}).catch(err =>{
  console.log(err.message);
  
})

initializeApp(firebaseConfig)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>
      <App/>
    </MenuProvider>
  </React.StrictMode>
)
