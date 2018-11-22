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

    } else {

    }
});

function register() {
    var userRef = firebase.database().ref().child("Users");

    var firstName = document.getElementById("register-first").value;
    var lastName = document.getElementById("register-last").value;
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });



    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: "displayname",
      photoURL: "photoURL"
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });


    var name, email, uid, emailVerified;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      emailVerified = user.emailVerified;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
                       // you have one. Use User.getToken() instead.

      window.alert(name + email + emailVerified + uid);
  } else {
      window.alert("user null");
  }

}

function login() {
    var userEmail = document.getElementById("login-email").value;
    var userPassword = document.getElementById("login-password").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
    });
}

function logout() {
    firebase.auth().signOut();
}
