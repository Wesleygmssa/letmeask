import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCqeoetVWrfVDU6-rMsJrJKtniQplld6TM",
  authDomain: "letmeask-e3667.firebaseapp.com",
  databaseURL: "https://letmeask-e3667-default-rtdb.firebaseio.com",
  projectId: "letmeask-e3667",
  storageBucket: "letmeask-e3667.appspot.com",
  messagingSenderId: "660726978500",
  appId: "1:660726978500:web:c9eefcd27a8bbce5cb3691",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.analytics();
export const database = firebase.database();
