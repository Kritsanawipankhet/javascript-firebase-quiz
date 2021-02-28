// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
  apiKey: "AIzaSyBp0ohWsqMLK8Ggtaa-EDGrVBq0fCJCUs4",
  authDomain: "javascript-firebase-quiz.firebaseapp.com",
  projectId: "javascript-firebase-quiz",
  storageBucket: "javascript-firebase-quiz.appspot.com",
  messagingSenderId: "889051271135",
  appId: "1:889051271135:web:b021417c62c97246aebe6a",
  measurementId: "G-0RZRTK5GFL",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.firestore();

const emailText = document.querySelector("#emailText");
const passwordText = document.querySelector("#passwordText");
const signInButton = document.querySelector("#signInButton");
const signUpButton = document.querySelector("#signUpButton");
const signOutButton = document.querySelector("#signOutButton");
const getUserProfile = document.querySelector("#getUserProfile");

signInButton.addEventListener("click", function () {
  const email = emailText.value;
  const pass = passwordText.value;

  const auth = firebase.auth();

  auth
    .signInWithEmailAndPassword(email, pass)
    .then(function (user) {

      console.log(user);
    })
    .catch(function (error) {
      console.log("Got an error", error.message);
    });
});

signUpButton.addEventListener("click", function () {
  const email = emailText.value;
  const pass = passwordText.value;

  const auth = firebase.auth();

  auth
    .createUserWithEmailAndPassword(email, pass)
    .then(function (user) {
      var user = firebase.auth().currentUser;
      user.sendEmailVerification().then(function (){
        console.log("user, ", user);
      }).catch(function (error){
        
      })
    })
    .catch(function (error) {
      console.log("Got an error", error.message);
    });
});


signOutButton.addEventListener("click", function () {
  firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(function (user){
  if(user){
    console.log("logged in")
  }else{
    console.log("not logged in")
  }
})


getUserProfile.addEventListener("click", function () {
  var user = firebase.auth().currentUser;

  if(user){
    console.log('Verified: ', user.emailVerified);
    console.log("email: ", user.email);
    console.log("Display Name: ", user.displayName);
    console.log("Photo: ", user.photoURL);
  }
});

const setUserProfile = document.querySelector("#setUserProfile");
const displayNameText = document.querySelector("#displayNameText");

setUserProfile.addEventListener("click", function (){
  var displayname = displayNameText.value;
  var user = firebase.auth().currentUser;
  if(user){
    user.updateProfile({
      displayName: displayname
    })
  }
})


