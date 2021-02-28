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
const signUpButton = document.querySelector("#signUpButton");
const firstnameText = document.querySelector("#firstnameText");
const lastnameText = document.querySelector("#lastnameText");

signUpButton.addEventListener("click", function () {
  const email = emailText.value;
  const pass = passwordText.value;
  const firstname = firstnameText.value;
  const lastname = lastnameText.value;

  const auth = firebase.auth();

  auth
    .createUserWithEmailAndPassword(email, pass)
    .then(function (user) {
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: firstname +' '+ lastname 
      })
      user.sendEmailVerification().then(function (){
        console.log("user, ", user);


      }).catch(function (error){
        
      })
    })
    .catch(function (error) {
      console.log("Got an error", error.message);
    });
});


