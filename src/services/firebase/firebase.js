import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDgZ1lfj7Jv9nIPqU4dpzixfJX57ryx30g",
  authDomain: "xplora-84d12.firebaseapp.com",
  projectId: "xplora-84d12",
  storageBucket: "xplora-84d12.appspot.com",
  messagingSenderId: "386671754913",
  appId: "1:386671754913:web:3016b11ec03376fa887ae0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);