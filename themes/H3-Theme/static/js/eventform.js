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


function reviewApplication() {
    const title = document.createElement('h3');
    title.textContent = "Review and Submit Request";

    /* insert more data (date, venue, all other id's) */

    document.getElementById("Review").innerHTML = "";
    document.getElementById("Review").appendChild(title);
}








// only load the events database reference once
var eventsRef = firebase.database().ref().child("Events");

/*
 * findEvents() - will populate the available venues on date selection
 */
function findEvents(dateText) {
    // clear the available venues and add the current searching date
    const dateChosen = document.createElement('label');
    dateChosen.textContent = dateText;

    document.getElementById("available-venues").innerHTML = "";
    document.getElementById("available-venues").appendChild(dateChosen);

    // add all venue spaces to the available venues
    eventsRef.on("child_added", snap => {
        // create the image cell
        const eventImage = document.createElement('img');
        eventImage.className = "card-image";
        eventImage.setAttribute("src", snap.child("image").val());
        eventImage.setAttribute("alt", "");
        const imageCell = document.createElement('div');
        imageCell.className = "image-cell";
        imageCell.appendChild(eventImage);

        // create the title cell
        const title = document.createElement('h5');
        title.textContent = snap.child("name").val();
        const titleCell = document.createElement('div');
        titleCell.className = "title-cell";
        titleCell.appendChild(title);

        // create the description cell
        const description = document.createElement('ul');
        description.className = "event-description";
        /*for (var item in snap.child("description").val()) {
            const bullet = document.createElement('li');
            bullet.textContent = item;
            description.appendChild(bullet);
        }*/
        snap.child("description").val().forEach(function(childNode){
            // This loop iterates over children of description
            const bullet = document.createElement('li');
            bullet.textContent = childNode;
            description.appendChild(bullet);
        });
        const descriptionCell = document.createElement('div');
        descriptionCell.className = "description-cell";
        descriptionCell.appendChild(description);

        // create the time cell
        const time = document.createElement('ul');
        if (snap.child("events").val()) {
            console.log(snap.child("events").val());
            for (var item in snap.child("events").val()) {
                //console.log(item);
            }
        }
        /*for (var item in snap.child("events").val()) {
            const bullet = document.createElement('li');
            bullet.textContent = item;
            time.appendChild(bullet);
        }*/
        const timeCell = document.createElement('div');
        timeCell.className = "time-cell";
        timeCell.appendChild(time);

        // add all grid cells to the venue grid, then add it to the available venues
        const venueGrid = document.createElement('div');
        venueGrid.className = "venue-grid my-card";
        venueGrid.appendChild(imageCell);
        venueGrid.appendChild(titleCell);
        venueGrid.appendChild(descriptionCell);
        venueGrid.appendChild(timeCell);
        document.getElementById("available-venues").appendChild(venueGrid);
    })
}
