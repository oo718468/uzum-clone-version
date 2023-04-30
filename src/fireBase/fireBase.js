// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOpjoUuketVr_nBjkSwyqFoK3yiTIrOIM",
  authDomain: "uzum-clone-version.firebaseapp.com",
  projectId: "uzum-clone-version",
  storageBucket: "uzum-clone-version.appspot.com",
  messagingSenderId: "151260334768",
  appId: "1:151260334768:web:6e4c8988de8f3579f5c975"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

