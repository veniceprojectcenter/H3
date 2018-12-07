


firebase.auth().onAuthStateChanged(function(user) {
    var loginBtn = document.getElementById("login-btn");
    var logoutBtn = document.getElementById("logout-btn");
    var documentsTab = document.getElementById("documents-tab");

    $('.guest-access').each(function(){
        // show all regular tabs
        $(this).show();
    });
    //username.textContent = user.displayName;
    if (user) {
        // user is logged in
        $("#login-btn").hide();
        $("#logout-btn").show();
        $("#documents-tab").show();
    } else {
        // user is logged out
        $("#documents-tab").hide();
        $("#logout-btn").hide();
        $("#login-btn").show();
    }
});

/*
 *  register() - takes the first name, last name, email, and password from the
 *      registration form and creates a new Firebase user, then logs them in
 */
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
