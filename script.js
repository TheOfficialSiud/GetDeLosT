// script.js

// Login Functions
 
function showLoginBox() {
  var loginOverlay = document.getElementById("loginOverlay");
  loginOverlay.style.display = "flex";
}

function closeLoginBox() {
  var loginOverlay = document.getElementById("loginOverlay");
  loginOverlay.style.display = "none";
}


// Register Functions

function showRegisterBox() {
  var registerOverlay = document.getElementById("registerOverlay");
  registerOverlay.style.display = "flex";
}

function closeRegisterBox() {
  var registerOverlay = document.getElementById("registerOverlay");
  registerOverlay.style.display = "none";
}


// function Signup

function loginToSignUp(){
  closeLoginBox();
  showRegisterBox();
}

// function Login

function signUpToLogin(){
  closeRegisterBox();
  showLoginBox();
}
// ... your other functions ...
