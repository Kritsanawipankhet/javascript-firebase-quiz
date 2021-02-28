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

const getDocument = document.querySelector("#getDocument");
getDocument.addEventListener("click", function () {
  var docRef = database.collection("cities").doc("DC");
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
});

const getMultipleDoc = document.querySelector("#getMultipleDoc");
getMultipleDoc.addEventListener("click", function () {
  database
    .collection("cities")
    .where("capital", "==", true)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting document: ", error);
    });
});

const getAllDoc = document.querySelector("#getAllDoc");
getAllDoc.addEventListener("click", function () {
  database
    .collection("cities")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting document: ", error);
    });
});

const getRealtimeDoc = document.querySelector("#getRealtimeDoc");
getRealtimeDoc.addEventListener("click", function () {
  database.collection("cities").onSnapshot(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      console.log("Current ID: ", doc.id, " Current data: ", doc.data());
    });
  });
});

const listenMultipleDoc = document.querySelector("#listenMultipleDoc");
listenMultipleDoc.addEventListener("click", function () {
  database
    .collection("cities")
    .where("country", "==", "USA")
    .onSnapshot(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log("Current country is USA : ", doc.id, doc.data());
      });
    });
});

const viewChangeButton = document.querySelector("#viewChangeButton");
viewChangeButton.addEventListener("click", function () {
  database.collection("cities").onSnapshot(function (querySnapshot) {
    querySnapshot.docChanges().forEach(function (doc) {
      if (doc.type === "added") {
        console.log("New : ", doc.doc.data());
      }
      if (doc.type === "modified") {
        console.log("Modified : ", doc.doc.data());
      }
      if (doc.type === "removed") {
        console.log("Removed : ", doc.doc.data());
      }
    });
  });
});
