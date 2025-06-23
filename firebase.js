import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDXxlbLpW6h2ImcNdRwa55H5GOFegMDq4g",
  authDomain: "urbex-scope.firebaseapp.com",
  projectId: "urbex-scope",
  storageBucket: "urbex-scope.appspot.com",
  messagingSenderId: "65981544834",
  appId: "1:65981544834:web:b4753a681e19f713e5f79b"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
