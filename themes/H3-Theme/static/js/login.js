


firebase.auth().onAuthStateChanged(function(user) {
    var username = document.getElementById("username");
    var loginBtn = document.getElementById("login-btn");
    var logoutBtn = document.getElementById("logout-btn");
    var documentsTab = document.getElementById("documents-tab");

    $('.guest-access').each(function(){
        $(this).show();
    });
    if (user) {
        // user is logged in
        username.textContent = user.displayName;
        $("#login-btn").hide();
        $("#logout-btn").show();
        $("#username").show();
        $("#documents-tab").show();
    } else {
        // user is logged out
        username.textContent = "";
        $("#documents-tab").hide();
        $("#username").hide();
        $("#logout-btn").hide();
        $("#login-btn").show();
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
