// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  initializeFirestore, connectFirestoreEmulator, getFirestore, collection, doc, addDoc, setDoc, updateDoc, deleteDoc, getDocs, getDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa5Hct2zAJSh4gyL45IvnRA4doFCY5eUg",
  authDomain: "personal-webapp-7eddc.firebaseapp.com",
  projectId: "personal-webapp-7eddc",
  storageBucket: "personal-webapp-7eddc.appspot.com",
  messagingSenderId: "1028782834621",
  appId: "1:1028782834621:web:649ac8fa3c87e4531ac8d4",
  measurementId: "G-K2KC6W4Z5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function initializeFirebase(){
    try{
      return getApp();
    } catch (e){
      // app has not been initialized
      const app = initializeApp(firebaseConfig);
  
      // initialize the database
      const db = initializeFirestore(app, {useFetchStreams: false})
  
      // connect up the emulator to the database
      if (process.env.NEXT_PUBLIC_EMULATE // manually set flag
        || process.env.FIRESTORE_EMULATOR_HOST // running using emulator exec
        || process.env.NODE_ENV === "test" // testing
        ){
        console.log("Connecting to emulator");
        connectFirestoreEmulator(db, "localhost", 8080 );
      }
      return app;
    }
  }

export async function loadData(userData){
    const db = getFirestore();

    const collectionRef = collection(db, "user");

    await Promise.all(userData.map(async (d)=>{

    }));


}