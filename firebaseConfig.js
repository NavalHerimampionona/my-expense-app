// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWDyl4ynv3A6DeAZooF_TGMT4dwhgErSE",
  authDomain: "my-expense-app-cfa12.firebaseapp.com",
  projectId: "my-expense-app-cfa12",
  storageBucket: "my-expense-app-cfa12.firebasestorage.app",
  messagingSenderId: "745001295221",
  appId: "1:745001295221:web:396fc616facba8af6a473c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);