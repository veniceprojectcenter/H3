function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function findEvents(dateText) {
    //document.getElementById("date-chosen").innerHTML = dateText;

    var firebaseRef = firebase.database().ref();
    firebaseRef.on("value", function(snapshot) {
        window.alert(snapshot);
    })

    //will build the avilable venues grid cell from the database
    document.getElementById("available-venues").innerHTML = "";
}


$(document).ready(function() {
});
