
/*
 *  FIREBASE AUTHENTICATION
 */

firebase.auth().onAuthStateChanged(function(user) {
    let loginBtn = document.getElementById("login-btn");
    let adminBtn = document.getElementById("admin-btn");

    $('.guest-access').each(function(){
        // show all regular tabs
        $(this).show();
    });
    //username.textContent = user.displayName;
    if (user) {
        // user is logged in
        $("#login-btn").hide();
        $("#admin-btn").show();
    } else {
        // user is logged out
        $("#admin-btn").hide();
        $("#login-btn").show();
    }
});

/*
 *  register() - takes the first name, last name, email, and password from the
 *      registration form and creates a new Firebase user, then logs them in
 */
function register() {
    let userRef = firebase.database().ref().child("Users");

    let firstName = document.getElementById("register-first").value;
    let lastName = document.getElementById("register-last").value;
    let email = document.getElementById("register-email").value;
    let password = document.getElementById("register-password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function() {
            let user = firebase.auth().currentUser;
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
      let errorCode = error.code;
      let errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

}

function login() {
    let userEmail = document.getElementById("login-email").value;
    let userPassword = document.getElementById("login-password").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        window.alert("Error: " + errorMessage);
    });
    $("#login-drawer").hide();
}

function logout() {
    $("#admin-drawer").hide();
    firebase.auth().signOut();
}







/*
 *  LOGIN DRAWER
 */


var notHov = 1; // Hover flag

$("#login-drawer").hover(function() {
    notHov^=1;  // Toggle flag on hover
});
$("#admin-drawer").hover(function() {
    notHov^=1;  // Toggle flag on hover
});

$(document).on('mouseup', function(){
    if(notHov) {
        $("#login-drawer").hide();//.fadeOut();
        $("#admin-drawer").hide();
    }
});




function openLogin() {
    $("#login-drawer").show();
}

function openAdmin() {
    $("#admin-drawer").show();
}

function closeAdmin() {
    $("#admin-drawer").hide();
}
