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

const updateDoc = document.querySelector("#updateDoc");
updateDoc.addEventListener("click", function () {
    const citiesRef = database.collection('cities');

    citiesRef.doc("BKK").update({
      country: "THAILAND",
      editAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(function (){
      console.log('Updated');
    }).catch(function (error){
      console.log('Error', error.message);
    })
});

const deleteDoc = document.querySelector("#deleteDoc");
deleteDoc.addEventListener("click", function () {
    const citiesRef = database.collection('cities');

    citiesRef.doc("BKK").update({
      state: firebase.firestore.FieldValue.delete()
    }).then(function (){
      console.log('Document successfully deleted');
    }).catch(function (error){
      console.log('Error removing document', error);
    })
});

const deleteDoc2 = document.querySelector("#deleteDoc2");
deleteDoc2.addEventListener("click", function () {
    const citiesRef = database.collection('cities');

    database.doc("cities/BKK").delete().then(function (){
      console.log('Document successfully deleted!')
    }).catch(function (error){
      console.log('Error removing document', error);
    })
});