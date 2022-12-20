// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1R1yQBHVidkHHBPZFURN-TXjDqNN-WUo",
    authDomain: "comment-39d8a.firebaseapp.com",
    databaseURL: "https://comment-39d8a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "comment-39d8a",
    storageBucket: "comment-39d8a.appspot.com",
    messagingSenderId: "838728999966",
    appId: "1:838728999966:web:1482525e0c485f491efa0f",
    measurementId: "G-5L05QWSQ0R"
};

// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function postComment() {
    //getting the values from the website to send to the database
    let name = document.getElementById("name").value;
    let comment = document.getElementById("comment").value;

    let newMessageKey = database.ref().child('comments').push().key;
    database.ref('comments/' + newMessageKey + '/Name').set(name);
    database.ref('comments/' + newMessageKey + '/Comment').set(comment);

    //listen for submit
    document.getElementById('commenting').addEventListener('submit', submitComment);
    //submit comment
    function submitComment(e) {
        e.preventDefault();
    }
}