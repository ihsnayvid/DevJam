import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDojsM51q_GzFm5cnTbX_i05EmvHHOjuF4",
  authDomain: "melodb-fe36c.firebaseapp.com",
  projectId: "melodb-fe36c",
  storageBucket: "melodb-fe36c.appspot.com",
  messagingSenderId: "971878356772",
  appId: "1:971878356772:web:fffeec061046e8847485b1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginButton = document.querySelector("#x");
const registerButton = document.querySelector("#y");

const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");
const e = document.querySelector("#e");
console.log("...");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, a.value, b.value)
    .then((userCredential) => {
      console.log("signed in");
      const user = userCredential.user;
      alert(`Signed in as ${user.email}`);
      console.log(user);
      window.location.href = "./index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(error);
      alert(error.message);
    });
});

registerButton.addEventListener("click", (event) => {
  event.preventDefault();
  createUserWithEmailAndPassword(auth, d.value, e.value)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: c.value,
      })
        .then((userCredential) => {
          console.log(userCredential);
          window.location.href = "./index.html";
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(error.message);
      alert(error.message);
    });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    alert(`Logged in as ${user.email}`);
    console.log(`Logged in as ${user.email}`);
  } else {
    console.log("User is signed out");
    alert("User is signed out");
  }
});

// code to sign out
//signOut(auth).then(() => {
//console.log("signout successfull")
//}).catch((error) => {
//console.error(error);
//});
