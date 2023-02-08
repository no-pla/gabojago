import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSe7jwBgbiYvYk8Z7X-G6GUmo3FqxPOgM",
  authDomain: "gabojago-ab30b.firebaseapp.com",
  projectId: "gabojago-ab30b",
  storageBucket: "gabojago-ab30b.appspot.com",
  messagingSenderId: "867293485771",
  appId: "1:867293485771:web:8852b5d3529cd65dc3594e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
