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

const simpleQuery = document.querySelector("#simpleQuery");
simpleQuery.addEventListener("click", function () {
  database
    .collection("cities")
    .where("state", "==", "CA")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.data());
      });
    });
});

const showCapital = document.querySelector("#showCapital");
showCapital.addEventListener("click", function () {
  database
    .collection("cities")
    .where("capital", "==", true)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.data());
      });
    });
});

const populationValueSearch = document.querySelector("#populationValueSearch");
populationValueSearch.addEventListener("click", function () {
  var populationValue = document.getElementById("populationValue").value;
  var value = parseInt(populationValue ? populationValue : 0);
  database
    .collection("cities")
    .where("population", ">", value)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.data());
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

const compundQuery = document.querySelector("#compoundQuery");
compundQuery.addEventListener("click", function () {
  database
    .collection("cities")
    .where("capital", "==", false)
    .where("country", "==", "USA")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.data());
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});


const treeCitiesFirst = document.querySelector("#treeCitiesFirst");
treeCitiesFirst.addEventListener("click", function () {
  database
    .collection("cities").orderBy("name").limit(3).get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.data().name);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

const treeCitiesLast = document.querySelector("#treeCitiesLast");
treeCitiesLast.addEventListener("click", function () {
  database
    .collection("cities").orderBy("name","desc").limit(3).get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.data().name);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});


const get2CitiesWithPop = document.querySelector("#get2CitiesWithPop");
get2CitiesWithPop.addEventListener("click", function () {
  database
    .collection("cities").where("population",">",100000).orderBy("population","desc").get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.data().name,doc.data().population);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});