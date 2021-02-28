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

const getUsersWeightMoreThanHermione = document.querySelector("#getUsersWeightMoreThanHermione");
getUsersWeightMoreThanHermione.addEventListener("click", function () {
    const docRef = database.collection("users");
    docRef.where("firstname","==","Hermione").where("lastname","==","Granger").limit(1).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        var getWeight = doc.data().weight;
        docRef.where("weight",">",getWeight).get().then(function (querySnapshot){
          querySnapshot.forEach(function (doc){
            console.log('name: ',doc.data().firstname, 'Lastname: ', doc.data().lastname,'weight: ',doc.data().weight);
          });
        })
       
      });
    }).catch(function (error){
      console.log(error);
    })

})

