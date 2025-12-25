function showSignup() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("signupBox").style.display = "block";
}

function showLogin() {
  document.getElementById("signupBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}

function signup() {
  const user = document.getElementById("signupUser").value;
  const email = document.getElementById("signupEmail").value;
  const pass = document.getElementById("signupPass").value;
  const confirmPass = document.getElementById("signupConfirmPass").value;

  if (!user || !email || !pass) {
    alert("Fill all fields, Senpai!");
    return;
  }

  if (pass !== confirmPass) {
    alert("Jutsu mismatch! Passwords do not match!");
    return;
  }

  alert("Crew Joined Successfully! Welcome " + user);
  showLogin();
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;

  if (!email || !pass) {
    alert("Enter credentials to enter the realm!");
    return;
  }

  alert("Login successful! Time to shop anime stuff 🔥");
}
