// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0zA8tr-adBnJOf3rOH0DGR708ocKSoK0",
  authDomain: "play-ba529.firebaseapp.com",
  projectId: "play-ba529",
  storageBucket: "play-ba529.appspot.com",
  messagingSenderId: "570638318040",
  appId: "1:570638318040:web:202c1d644a33921ebddaad"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const storage = getStorage()


export default app
