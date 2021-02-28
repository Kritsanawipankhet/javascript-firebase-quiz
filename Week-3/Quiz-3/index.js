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

const createUsers = document.querySelector("#createUsers");
createUsers.addEventListener("click", function () {
  const docRef = database.collection("users");
  docRef.add({
    firstname: "Harry",
    lastname: "Potter",
    gender: "Male",
    birthdate: "07/31/1997",
    weight: 65,
    salary: 50000,
    country: "England"
  });
  docRef.add({
    firstname: "Steve",
    lastname: "Rogers",
    gender: "Male",
    birthdate: "07/04/1981",
    weight: 75,
    salary: 85000,
    country: "USA"
  });
  docRef.add({
    firstname: "Ronnachut",
    lastname: "Jinapangkas",
    gender: "Male",
    birthdate: "06/15/1989",
    weight: 65,
    salary: 20000,
    country: "USA"
  });
  docRef.add({
    firstname: "Hermione",
    lastname: "Granger",
    gender: "Female",
    birthdate: "09/19/1979",
    weight: 55,
    salary: 65000,
    country: "England"
  });
  docRef.add({
    firstname: "Cherpung",
    lastname: "Areekul",
    gender: "Female",
    birthdate: "05/02/1996",
    weight: 48,
    salary: 100000,
    country: "Thailand"
  });
  docRef.add({
    firstname: "Anne",
    lastname: "Hathaway",
    gender: "Female",
    birthdate: "11/12/1982",
    weight: 55,
    salary: 81000,
    country: "USA"
  });
  console.log('Create Users');
})