// Initialize Firebase
var config = {
  apiKey: "AIzaSyDPZLaOVEBhOvLNeUn7pmJVlkf0z9boiGM",
  authDomain: "h3-sdpt.firebaseapp.com",
  databaseURL: "https://h3-sdpt.firebaseio.com",
  projectId: "h3-sdpt",
  storageBucket: "h3-sdpt.appspot.com",
  messagingSenderId: "609543007859"
};
firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // user is logged in
    } else {
        // user is logged out
    }
});

function register() {
    var userRef = firebase.database().ref().child("Users");

    var firstName = document.getElementById("register-first").value;
    var lastName = document.getElementById("register-last").value;
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function() {
            var user = firebase.auth().currentUser;
            if (user) {
                user.updateProfile({
                    displayName: firstName + " " + lastName,
                    photoURL: ""
                });
            }
        }
    )
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

}

function login() {
    var userEmail = document.getElementById("login-email").value;
    var userPassword = document.getElementById("login-password").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
    });
}

function logout() {
    firebase.auth().signOut();
}
