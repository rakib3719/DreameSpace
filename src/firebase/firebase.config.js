// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXszxBiR8xV6-hZIOJZ2ekDGW3fFWl0Hs",
  authDomain: "dreamspace-1f58d.firebaseapp.com",
  projectId: "dreamspace-1f58d",
  storageBucket: "dreamspace-1f58d.appspot.com",
  messagingSenderId: "696110051223",
  appId: "1:696110051223:web:48c10511a7436a424a9ed2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export default auth
