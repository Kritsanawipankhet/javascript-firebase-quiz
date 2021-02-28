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

function getDataCities(fieldPath = null, directionStr = null) {
  document.getElementById("showDataQuery").innerHTML = "";
  var queryDatabase;
  if (fieldPath) {
    if (directionStr) {
      queryDatabase = database
        .collection("cities")
        .orderBy(fieldPath, directionStr);
    } else {
      queryDatabase = database.collection("cities").orderBy(fieldPath);
    }
  } else {
    queryDatabase = database.collection("cities");
  }

  queryDatabase
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        document.getElementById("showDataQuery").innerHTML +=
          "<tr><td>City Name: </td><td>" +
          doc.data().name +
          '</td><td>Country: </td><td width="30%">' +
          doc.data().country +
          "</td><td>Population: </td><td>" +
          doc.data().population +
          "</td></tr>";
        console.log(doc.data());
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
