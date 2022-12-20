// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlm7q53px_bdzDpr5rKriNELtv25gF1sA",
    authDomain: "comment-91886.firebaseapp.com",
    databaseURL: "https://comment-91886-default-rtdb.firebaseio.com",
    projectId: "comment-91886",
    storageBucket: "gs:comment-91886.appspot.com",
    messagingSenderId: "1054923371683",
    appId: "1:1054923371683:web:29c92e257672e3d18a3b16",
    measurementId: "G-BNBT4QGFMV"
};

firebase.initializeApp(firebaseConfig);

// Reference comments collection
var commentsRef = firebase.database().ref('comments');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var comment = getInputVal('comment');

    // Save comment
    saveComment(name, email, comment);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save comment to firebase
function saveComment(name, email, comment) {
    var newCommentRef = commentsRef.push();
    newCommentRef.set({
        name: name,
        email: email,
        comment: comment
    });
}

var leadsRef = firebase.database().ref('comments');
leadsRef.on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();

        var name = document.createTextNode(childData.name);
        var email = document.createTextNode('(' + childData.email + ')');
        var comment = document.createTextNode(childData.comment);

        var percomment = document.getElementById("percomment");
        var namet = document.createElement("span");
        var emailt = document.createElement("span");
        var commentt = document.createElement("span");
        namet.setAttribute('class', 'name');
        emailt.setAttribute('class', 'email');
        commentt.setAttribute('class', 'comment');
        namet.appendChild(name);
        emailt.appendChild(email);
        emailt.appendChild(document.createElement('br'));
        commentt.appendChild(comment);

        percomment.appendChild(namet);
        percomment.appendChild(emailt);
        percomment.appendChild(commentt);
    });
});