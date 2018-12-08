
// only load the events database reference once
var eventsRef = firebase.database().ref().child("Events");



















/*
 *  openTab() -
 */
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    // hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // make all active tabs in navbar
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // show selected tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function loadVenueSelection() {
    $("#datepicker").datepicker({
        onSelect: findEvents,
        minDate: new Date()
    });

    // open up to todays date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    var today = mm + '/' + dd + '/' + yyyy;
    findEvents(today);
}


/*
 *  validateNumber() - will make sure that the key press event is only numbers
 */
function validateNumber(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}





/*
 *  updateReceiptCheckbox() - adds or removes the item/cost to the receipt and updates the total
 */
function updateReceiptCheckbox(checkbox, item, cost, reference) {
    var totalCost = document.getElementById("receipt-total").innerHTML;
    totalCost = parseFloat(totalCost.slice(8));
    cost = parseFloat(cost);
    if (checkbox.checked == true) {
        addToReceipt(item, cost, reference);
        totalCost += cost;
    } else {
        deleteFromReceipt(item);
        totalCost -= cost;
   }
   document.getElementById("receipt-total").innerHTML = "Total: €" + Number(totalCost).toFixed(2);
}


/*
 *  updateReceiptAmount() - adds or removes the item/cost to the receipt and updates the total
 */
function updateReceiptAmount(input, item, cost, reference) {
    // see if already in table, get count if it is
    var receiptTable = document.getElementById("receipt-table");
    for (var i = 1; i < receiptTable.rows.length; i++) {
        var row = receiptTable.rows[i];
        var values = row.cells[0].innerHTML.split(" ");
        var currCount = input.value;
        if (values[0] == item) {
            // if the item is in the table
            var pastCount = values[1].slice(1, -1);

            // update the receipt total
            var totalCost = document.getElementById("receipt-total").innerHTML;
            totalCost = parseFloat(totalCost.slice(8));
            totalCost += (currCount - pastCount) * cost;
            document.getElementById("receipt-total").innerHTML = "Total: €" + Number(totalCost).toFixed(2);

            if (currCount == 0 || currCount == null) {
                // remove from the receipt if there is a zero count
                deleteFromReceipt(item + " (" + pastCount + ")");
            } else {
                // update the receipt entry by deleting it and readding it
                deleteFromReceipt(item + " (" + pastCount + ")");
                addToReceipt(item + " (" + currCount + ")", currCount * cost, reference);
            }
            break;
        }
        if (i == receiptTable.rows.length - 1) {
            // if the item is not in the table, add it
            if (currCount != 0) {
                addToReceipt(item + " (" + currCount + ")", currCount * cost, reference);
                // add to the total
                var totalCost = document.getElementById("receipt-total").innerHTML;
                totalCost = parseFloat(totalCost.slice(8));
                totalCost += currCount * cost;
                document.getElementById("receipt-total").innerHTML = "Total: €" + Number(totalCost).toFixed(2);
                break;
            }
        }
    }
}


/*
 *  updateReceiptSpace() -
 */
function updateReceiptSpace(checkbox, space, type, cost, reference) {
    var receiptTable = document.getElementById("receipt-table");

    for (var i = 1; i < receiptTable.rows.length; i++) {
        var row = receiptTable.rows[i];
        var item = row.cells[0].innerHTML;
        var currCount;
        if (item.includes(space + " " + type)) {
            // if the item is in the table
            var pastCount = parseFloat(item.substring(item.indexOf('(') + 1, item.indexOf(')')));
            // update the receipt total
            var totalCost = document.getElementById("receipt-total").innerHTML;
            totalCost = parseFloat(totalCost.slice(8));

            if (checkbox.checked == true) {
                currCount = pastCount + 1;
            } else {
                currCount = pastCount - 1;
            }
            totalCost += (currCount - pastCount) * cost;
            document.getElementById("receipt-total").innerHTML = "Total: €" + Number(totalCost).toFixed(2);

            if (currCount == 0 || currCount == null) {
                // remove from the receipt if there is a zero count
                deleteFromReceipt(space + " " + type + " (" + pastCount + ")");
            } else {
                // update the receipt entry by deleting it and readding it
                deleteFromReceipt(space + " " + type + " (" + pastCount + ")");
                addToReceipt(space + " " + type + " (" + currCount + ")", currCount * cost, reference);
            }
            break;
        }
        if (i == receiptTable.rows.length - 1) {
            // if the item is not in the table, add it
            addToReceipt(space + " " + type + " (1)", cost, reference);
            // add to the total
            var totalCost = document.getElementById("receipt-total").innerHTML;
            totalCost = parseFloat(totalCost.slice(8));
            totalCost += cost;
            document.getElementById("receipt-total").innerHTML = "Total: €" + Number(totalCost).toFixed(2);
            break;
        }
    }
}


/*
 *  addToReceipt() - adds a row to the table with the given item and cost
 */
function addToReceipt(item, cost, reference) {
    var receiptTable = document.getElementById("receipt-table");
    var rowCnt = receiptTable.rows.length;        // GET TABLE ROW COUNT.
    var tr = receiptTable.insertRow(rowCnt);      // TABLE ROW.
    tr.className = reference;
    tr.onclick = function() { openTab(event, reference) };


    var td0 = document.createElement('td');          // TABLE DEFINITION.
    td0 = tr.insertCell(0);
    td0.innerHTML = item;
    var td1 = document.createElement('td');          // TABLE DEFINITION.
    td1 = tr.insertCell(1);
    td1.innerHTML = "€" + Number(cost).toFixed(2); ;
}

/*
 *  deleteFromReceipt() - removes the row with the given value from the recipt table
 */
function deleteFromReceipt(item) {
    var receiptTable = document.getElementById("receipt-table");
    for (var i = 1; i < receiptTable.rows.length; i++) {
        var row = receiptTable.rows[i];
        var value = row.cells[0].innerHTML;
        if (value == item) {
            receiptTable.deleteRow(i);
            break;
        }
    }
}


/*
 *  deleteClassFromReceipt() - will delete the entire row with the given refernce class from the receipt table
 */
function deleteClassFromReceipt(reference) {
    var receiptTable = document.getElementById("receipt-table");
    for (var i = receiptTable.rows.length - 1; i > 0; i--) {
        var row = receiptTable.rows[i];
        if (reference == row.className) {
            // take the total cost off the receipt
            var totalCost = document.getElementById("receipt-total").innerHTML;
            totalCost = parseFloat(totalCost.slice(8));
            var cost = parseFloat(row.cells[1].innerHTML.slice(1));
            totalCost -= cost;
            document.getElementById("receipt-total").innerHTML = "Total: €" + Number(totalCost).toFixed(2);
            // delete the row from the table
            receiptTable.deleteRow(i);
        }
    }
}
















/*
 *  createLabelDiv() - creates a div with an h5 "label" next to a p tag content
 */
function createLabelDiv(label, contentid) {
    const labelDiv = document.createElement('div');
    labelDiv.className = "label-div";

    const labelTitle = document.createElement('h5');
    labelTitle.textContent = label + ": ";
    const labelTitleContent = document.createElement('p');
    labelTitleContent.textContent = document.getElementById(contentid).value;

    labelDiv.appendChild(labelTitle);
    labelDiv.appendChild(labelTitleContent);
    return labelDiv;
}

/*
 *  createVenueDiv() -
 */
function createVenueReviewDiv(venue, date, times) {
    const venueDiv = document.createElement('div');
    venueDiv.className = "review-div";

    const title = document.createElement('h4');
    title.textContent = "Venue";

    // get the date of the selected calender date
    const dateLabel = document.createElement('h5');
    dateLabel.textContent = "Date: ";
    const dateText = document.createElement('p');
    dateText.textContent = date;

    const spaceLabel = document.createElement('h5');
    spaceLabel.textContent = "Space: ";
    const space = document.createElement('p');
    space.textContent = venue;

    // add the times to a list
    const time = document.createElement('h5');
    time.textContent = "Time(s): ";
    const timeArray = document.createElement('ul');
    for (var i = 0; i < times.length; i++) {
        let hour = times[i];
        const timeSlotBullet = document.createElement('li');
        const timeSlotText = document.createElement('p');

        if (hour == "full") {
            timeSlotText.textContent = "Full day";
        } else if (hour == "morn" || hour == "even") {
            timeSlotText.textContent = "Half day " + hour + "ing";
        } else {
            hour = parseFloat(hour);
            timeSlotText.textContent = hour + ":00 - " + (hour+1) + ":00";
        }
        timeSlotBullet.appendChild(timeSlotText);
        timeArray.appendChild(timeSlotBullet);
    }

    venueDiv.appendChild(title);
    venueDiv.appendChild(spaceLabel);
    venueDiv.appendChild(space);
    venueDiv.appendChild(document.createElement('br'));
    venueDiv.appendChild(dateLabel);
    venueDiv.appendChild(dateText);
    venueDiv.appendChild(document.createElement('br'));
    venueDiv.appendChild(time);
    venueDiv.appendChild(timeArray);
    return venueDiv;
}

/*
 *  createEventDiv() -
 */
function createEventReviewDiv() {
    const eventDiv = document.createElement('div');
    eventDiv.className = "review-div";

    const title = document.createElement('h4');
    title.textContent = "Event";

    eventDiv.appendChild(title);
    eventDiv.appendChild(createLabelDiv("Title", "eventTitle"));
    eventDiv.appendChild(createLabelDiv("Type", "eventType"));
    eventDiv.appendChild(createLabelDiv("Expected # of People", "expPeople"));
    eventDiv.appendChild(createLabelDiv("Description", "eventDescription"));
    return eventDiv;
}

/*
 *  createAmenityDiv() -
 */
function createAmenityReviewDiv() {
    const amentiyDiv = document.createElement('div');
    amentiyDiv.className = "review-div";

    const title = document.createElement('h4');
    title.textContent = "Amenities";


    amentiyDiv.appendChild(title);
    return amentiyDiv;
}

/*
 *  createContactDiv() -
 */
function createContactReviewDiv() {
    const contactDiv = document.createElement('div');
    contactDiv.className = "review-div";

    const title = document.createElement('h4');
    title.textContent = "Contact";

    contactDiv.appendChild(title);
    contactDiv.appendChild(createLabelDiv("Company/Organizaiton", "contactCompany"));
    contactDiv.appendChild(createLabelDiv("Full Name", "contactName"));
    contactDiv.appendChild(createLabelDiv("Email", "contactEmail"));
    contactDiv.appendChild(createLabelDiv("Cell Phone", "contactPhone"));
    return contactDiv;
}


/*
 *  reviewApplication() -
 */
function reviewApplication() {
    const title = document.createElement('h3');
    title.textContent = "Review and Submit Request";

    // get the date, venue, and times chosen
    let date = document.getElementById("date-chosen").innerHTML;
    let venue = "";
    let times = [];
    $(".hour-checkbox").each(function() {
        if ($(this).is(":checked")) {
            // set the venue to everything before the last space
            let hour = this.id;
            venue = (hour).substring(0, (hour).lastIndexOf(" "));

            // set the time to the last word
            let idComponents = hour.split(" ");
            times.push(parseFloat(idComponents[idComponents.length-1]));
        }
    });


    // submit button to push the event to the database
    var submit = document.createElement('input');
    submit.type = "submit";
    submit.onclick = function() {
        // insert new data into the Events database
        // create the new eventData child
        let venueName = venue;
        let eventName = "Test Event Title"
        var eventData = {
            date: date,
            times: times,
            public: false,
            approved: false
        };

        // Write the new event's data
        var updates = {};
        updates['/Events/' + venueName + "/events/" + eventName] = eventData;

        firebase.database().ref().update(updates);
    };


    document.getElementById("Review").innerHTML = "";
    document.getElementById("Review").appendChild(title);
    document.getElementById("Review").appendChild(createVenueReviewDiv(venue, date, times));
    document.getElementById("Review").appendChild(createEventReviewDiv());
    document.getElementById("Review").appendChild(createAmenityReviewDiv());
    document.getElementById("Review").appendChild(createContactReviewDiv());
    document.getElementById("Review").appendChild(submit);
}














/*
 *  disableCheckboxes() - will disable all other checkboxes not a part of this event.
        If it is unchecked, it will reenable other venue checkboxes
 */
function disableCheckboxes(checkbox) {
    let prefix = (checkbox.id).substring(0, (checkbox.id).lastIndexOf(" "));
    if (checkbox.checked) {
        // disable all other checkboxes not with the id prefix
        $(".hour-checkbox").each(function() {
            if (!(this.id).includes(prefix)) {
                $(this).attr("disabled", true);
            }
        });
    } else {
        // check other checkboxes with this id prefix, if no others are checked, enable all checkboxes
        let anotherBox = false;
        $(".hour-checkbox").each(function() {
            if ((this.id).includes(prefix) && this.checked) {
                anotherBox = true;
            }
        });
        if (!anotherBox) {
            $(".hour-checkbox").each(function() {
                $(this).removeAttr("disabled");
            });
        }
    }
}

















/* DYNAMICALLY CREATE AND LOAD HTML ELEMENTS */




/*
 * findEvents() - will populate the available venues on date selection
 */
function findEvents(dateText) {
    // clear venues from the receipt
    deleteClassFromReceipt("Selection");

    // clear the available venues and add the current searching date
    const dateChosen = document.createElement('p');
    dateChosen.id = "date-chosen";
    dateChosen.textContent = dateText;
    const dateChosenLabel = document.createElement('h5');
    dateChosenLabel.textContent = "Available spaces for ";
    dateChosen.htmlFor = "date-chosen";

    document.getElementById("available-venues").innerHTML = "";
    document.getElementById("available-venues").appendChild(dateChosenLabel);
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
        let eventName = snap.child("name").val();
        title.textContent = eventName;
        const titleCell = document.createElement('div');
        titleCell.className = "title-cell";
        titleCell.appendChild(title);

        // create the description cell
        const description = document.createElement('ul');
        description.className = "event-description";
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
        // see what times are taken
        let takenTimes = new Array();
        if (snap.child("events").val()) {
            // if there are events listed for this venue
            for (let item in snap.child("events").val()) {
                // check for the selected date
                if (dateText == snap.child("events").val()[item].date) {
                    // add all times to the taken times array
                    for (let takenTime of snap.child("events").val()[item].times) {
                        takenTimes.push(takenTime);
                    }
                }
            }
        }
        // list all of the available times
        let timeAvailable = false;
        // create halfday/fullday section
        const specialCol = document.createElement('div');
        specialCol.className = "col";
        const specialTimes = document.createElement('ul');
        // create morning slot
        if (!(takenTimes.includes(9) || takenTimes.includes(10) || takenTimes.includes(11) || takenTimes.includes(12))){
            const bullet = document.createElement('li');

            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.id = eventName + " morn";
            checkbox.className = "hour-checkbox";
            checkbox.onclick = function() {
                updateReceiptSpace(this, eventName, "Morning Half", 20, "Selection");
                disableCheckboxes(this);
            };

            var label = document.createElement('label')
            label.htmlFor = eventName + " morn";
            label.appendChild(document.createTextNode("9:00 - 13:00"));

            // add checkbox and label to li, then add to ul
            bullet.appendChild(checkbox);
            bullet.appendChild(label);
            specialTimes.appendChild(bullet);
        }
        // create evening slot
        if (!(takenTimes.includes(13) || takenTimes.includes(14) || takenTimes.includes(15) || takenTimes.includes(16))){
            const bullet = document.createElement('li');

            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.id = eventName + " even";
            checkbox.className = "hour-checkbox";
            checkbox.onclick = function() {
                updateReceiptSpace(this, eventName, "Evening Half", 20, "Selection");
                disableCheckboxes(this);
            };

            var label = document.createElement('label')
            label.htmlFor = eventName + " even";
            label.appendChild(document.createTextNode("13:00 - 17:00"));

            // add checkbox and label to li, then add to ul
            bullet.appendChild(checkbox);
            bullet.appendChild(label);
            specialTimes.appendChild(bullet);
        }
        // create fullday slot
        if (!(takenTimes.includes(9) || takenTimes.includes(10) || takenTimes.includes(11) || takenTimes.includes(12) ||
            takenTimes.includes(13) || takenTimes.includes(14) || takenTimes.includes(15) || takenTimes.includes(16))){
                const bullet = document.createElement('li');

                var checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.id = eventName + " full";
                checkbox.className = "hour-checkbox";
                checkbox.onclick = function() {
                    updateReceiptSpace(this, eventName, "Full day", 35, "Selection");
                    disableCheckboxes(this);
                };

                var label = document.createElement('label')
                label.htmlFor = eventName + " full";
                label.appendChild(document.createTextNode("9:00 - 17:00"));

                // add checkbox and label to li, then add to ul
                bullet.appendChild(checkbox);
                bullet.appendChild(label);
                specialTimes.appendChild(bullet);
        }
        const specialTitle = document.createElement('h6');
        specialTitle.textContent = "Special Hours";
        specialCol.appendChild(specialTitle);
        specialCol.appendChild(specialTimes);

        // create business section
        const businessCol = document.createElement('div');
        businessCol.className = "col";
        const businessTimes = document.createElement('ul');
        for (let t = 8; t <= 17; t++) {
            if (!takenTimes.includes(t)) {
                timeAvailable = true;
                const bullet = document.createElement('li');

                var checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.id = eventName + " " + t;
                checkbox.className = "hour-checkbox";
                checkbox.onclick = function() {
                    updateReceiptSpace(this, eventName, "Business Hours", 10, "Selection");
                    disableCheckboxes(this);
                };

                var label = document.createElement('label')
                label.htmlFor = eventName + " " + t;
                label.appendChild(document.createTextNode(t + ":00 - " + ((t+1)%24) + ":00"));

                // add checkbox and label to li, then add to ul
                bullet.appendChild(checkbox);
                bullet.appendChild(label);
                businessTimes.appendChild(bullet);
            }
        }
        const businessTitle = document.createElement('h6');
        businessTitle.textContent = "Business Hours";
        businessCol.appendChild(businessTitle);
        businessCol.appendChild(businessTimes);

        // create nightly section
        const nightlyCol = document.createElement('div');
        nightlyCol.className = "col";
        const nightlyTimes = document.createElement('ul');
        for (let t = 18; t <= 23; t++) {
            if (!takenTimes.includes(t)) {
                timeAvailable = true;
                const bullet = document.createElement('li');

                var checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.id = eventName + " " + t;
                checkbox.className = "hour-checkbox";
                checkbox.onclick = function() {
                    updateReceiptSpace(this, eventName, "After Hours", 10, "Selection");
                    disableCheckboxes(this);
                };

                var label = document.createElement('label')
                label.htmlFor = eventName + " " + t;
                label.appendChild(document.createTextNode(t + ":00 - " + ((t+1)%24) + ":00"));

                // add checkbox and label to li, then add to ul
                bullet.appendChild(checkbox);
                bullet.appendChild(label);
                nightlyTimes.appendChild(bullet);
            }
        }
        const nightlyTitle = document.createElement('h6');
        nightlyTitle.textContent = "Nightly Hours";
        nightlyCol.appendChild(nightlyTitle);
        nightlyCol.appendChild(nightlyTimes);

        // add sections to time cell
        const timeCell = document.createElement('div');
        timeCell.className = "time-cell row";
        timeCell.appendChild(specialCol);
        timeCell.appendChild(businessCol);
        timeCell.appendChild(nightlyCol);


        // if there is at least one time available, add all grid cells to the venue grid, then add it to the available venues
        if (timeAvailable) {
            const venueGrid = document.createElement('div');
            venueGrid.className = "venue-grid my-card";
            venueGrid.appendChild(imageCell);
            venueGrid.appendChild(titleCell);
            venueGrid.appendChild(descriptionCell);
            venueGrid.appendChild(timeCell);
            document.getElementById("available-venues").appendChild(venueGrid);
        }
    })

    //document.getElementById("available-venues").setAttribute("style", "-webkit-animation: fadeIn 1s;animation: fadeIn 1s;");
}
