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

const get6UsersShowAge = document.querySelector("#get6UsersShowAge");
get6UsersShowAge.addEventListener("click", function () {
    const docRef = database.collection("users");
    docRef.limit(6).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {

        console.log('name: ',doc.data().firstname, 'Lastname: ', doc.data().lastname,'Age: ', ageCalculate(doc.data().birthdate));
      });
    }).catch(function (error){
      console.log(error);
    })

})

function ageCalculate(birthdate){
  if(birthdate == null || birthdate == ''){
    return null;
  }else{
    var dob = new Date(birthdate);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();

    var age = Math.abs(year - 1970);
    return age;
  }
}