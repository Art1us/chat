import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCWR8wIOdCLKq-DblCPPaRozvwSigoLoTI",
  authDomain: "chat-2c4f2.firebaseapp.com",
  projectId: "chat-2c4f2",
  storageBucket: "chat-2c4f2.appspot.com",
  messagingSenderId: "520880689823",
  appId: "1:520880689823:web:c4bb5e9590138eff7488aa"
}).auth()