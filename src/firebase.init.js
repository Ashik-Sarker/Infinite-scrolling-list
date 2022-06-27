// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkP7PmYBUhtdtBN_H4NVsdKtzdDtpy6vM",
    authDomain: "infinite-scrolling-a1005.firebaseapp.com",
    projectId: "infinite-scrolling-a1005",
    storageBucket: "infinite-scrolling-a1005.appspot.com",
    messagingSenderId: "822170441593",
    appId: "1:822170441593:web:59417f9fa73b184bf781a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;