import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
export const InitializeFirebase = () => {
  initializeApp(firebaseConfig);
};
