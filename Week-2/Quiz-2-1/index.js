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

const expData = document.querySelector("#expData");
expData.addEventListener("click", function () {
  var citiesRef = database.collection("cities");
  citiesRef.doc("SF").set({
    name: "San Francisco",
    state: "CA",
    country: "USA",
    capital: false,
    population: 860000,
  });
  citiesRef.doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA",
    capital: false,
    population: 390000,
  });
  citiesRef.doc("DC").set({
    name: "Washington D.C.",
    state: null,
    country: "USA",
    capital: true,
    population: 680000,
  });
  citiesRef.doc("TOK").set({
    name: "Tokyo",
    state: null,
    country: "Japan",
    capital: true,
    population: 9000000,
  });
  citiesRef.doc("BJ").set({
    name: "Beijing",
    state: null,
    country: "China",
    capital: true,
    population: 21500000,
  });
  console.log("Save data");
});

function getData(data){
    var docRef = database.collection("cities").doc(data);
    docRef
      .get()
      .then(function (doc) {
        if (doc && doc.exists) {
          console.log("Doc ID", doc.id, "Document data:", doc.data());
        } else {
          console.log("No such document");
        }
      })
      .catch(function (error) {
        console.log("Error getting document: ", error);
      });
}