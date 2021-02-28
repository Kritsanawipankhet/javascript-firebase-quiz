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

const editBJCity = document.querySelector("#editBJCity");
editBJCity.addEventListener("click", function () {
  var nameText = document.getElementById("nameText").value;
  var countryText = document.getElementById("countryText").value;
  var populationText = document.getElementById("populationText").value;

  var docRef = database.collection("cities").doc("BJ");

  docRef
    .update({
      name: nameText,
      country: countryText,
      population: populationText,
    })
    .then(function () {
      docRef
        .get()
        .then(function (doc) {
          console.log("Edited", doc.id, "Document data:", doc.data());
        })
        .catch(function (error) {
          console.log("Error getting document: ", error);
        });
    })
    .catch(function (error) {
      console.log("Got an Error : " + error);
    });
});
