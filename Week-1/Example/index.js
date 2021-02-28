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
var db = firebase.firestore();
const docRef = db.doc('samples/memberData');
//const docRef = database.collection('samples').doc('memberData');
console.log(docRef);
function fn1(){
    var textToSave = document.getElementById('memberNameText').value;
    console.log('Saving.. ' + textToSave + ' to Firebase');
    docRef.set({
        memberName: textToSave,
    }).then(function (){
        console.log('name saved');
    }).catch(function (error){
        console.log('Got an error: ' + error);
    });
}
