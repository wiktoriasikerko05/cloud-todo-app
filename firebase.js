import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// PASTE YOUR GOOGLE KEYS HERE:
const firebaseConfig = {
  apiKey: "AIzaSyA7vfv7QwQp4c4_drteKxxGa7NyBnW595A",
  authDomain: "internship-todo-4c1f3.firebaseapp.com",
  projectId: "internship-todo-4c1f3",
  storageBucket: "internship-todo-4c1f3.firebasestorage.app",
  messagingSenderId: "11905839808",
  appId: "1:11905839808:web:0607f6be3d9616c11d7325",
  measurementId: "G-RKMZTTBVS2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);