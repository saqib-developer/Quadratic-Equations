// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlm7q53px_bdzDpr5rKriNELtv25gF1sA",
    authDomain: "comment-91886.firebaseapp.com",
    databaseURL: "https://comment-91886-default-rtdb.firebaseio.com",
    projectId: "comment-91886",
    storageBucket: "comment-91886.appspot.com",
    messagingSenderId: "1054923371683",
    appId: "1:1054923371683:web:29c92e257672e3d18a3b16",
    measurementId: "G-BNBT4QGFMV"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, email, message);

    // Show alert
    // document.querySelector('.alert').style.display = 'block';

    // // Hide alert after 3 seconds
    // setTimeout(function () {
    //     document.querySelector('.alert').style.display = 'none';
    // }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}