import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBS8tm1gu5KP05tduk8jTGl2qgmzX8QwuM",
  authDomain: "weebstore-2a358.firebaseapp.com",
  projectId: "weebstore-2a358",
  storageBucket: "weebstore-2a358.firebasestorage.app",
  messagingSenderId: "70312457124",
  appId: "1:70312457124:web:7d5064dbfb605699a30731",
  measurementId: "G-80EDK2GL2H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toggle UI
function showSignup() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("signupBox").style.display = "block";
}

function showLogin() {
  document.getElementById("signupBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}

window.showSignup = showSignup;
window.showLogin = showLogin;

// Signup
window.signup = async function () {
  const user = document.getElementById("signupUser").value;
  const email = document.getElementById("signupEmail").value;
  const pass = document.getElementById("signupPass").value;
  const confirmPass = document.getElementById("signupConfirmPass").value;

  if (!user || !email || !pass) {
    alert("Fill all fields!");
    return;
  }

  if (pass !== confirmPass) {
    alert("Passwords do not match!");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, pass);
    alert("Account created successfully!");
    showLogin();
  } catch (err) {
    alert(err.message);
  }
};

// Login
window.login = async function () {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;

  if (!email || !pass) {
    alert("Enter credentials!");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, pass);
    alert("Login successful!");
    console.log("Logged in user:", email);
  } catch (err) {
    alert(err.message);
  }
};

// Logout
window.logout = function () {
  signOut(auth)
    .then(() => console.log("Logged out"))
    .catch(err => console.log(err.message));
};

// Auth listener
onAuthStateChanged(auth, user => {
  console.log(user ? "User logged in: " + user.email : "No user logged in");
});
