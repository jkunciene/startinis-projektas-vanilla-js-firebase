//firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getDatabase, 
    set, update, 
    ref, get, 
    child, remove, 
    push } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from
    "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

//my modules imports
import { firebaseConfig } from './firebase.js';
import { createRegisterLoginForm } from './register_form.js';

// Initialize Firebase, database, authentication
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();


