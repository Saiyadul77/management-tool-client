// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0deDqhkt_DHRz5m1Snvl3F-YzziSZKqk",
  authDomain: "task-management-tool-354b0.firebaseapp.com",
  projectId: "task-management-tool-354b0",
  storageBucket: "task-management-tool-354b0.appspot.com",
  messagingSenderId: "459932341807",
  appId: "1:459932341807:web:019f78cd9b0cdca84dd8da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

export default auth;