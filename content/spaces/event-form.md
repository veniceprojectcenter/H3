---
title: "Event Form"
layout: "spaces"
---
<form id="eventForm">

    <div>
        <h2>Contact</h2>
        Group: <input type="text"> (company or organizaiton name if applicable)<br>
        Name of Contact: <input type="text"><br>
        Contact Email: <input type="text"><br>
        Contact Cell: <input type="text"><br>
    </div>

    <div>
        <h2>Event</h2>
        Title: <input type="text"><br>
        Type:
        <select>
            <option>Seminar</option>
            <option>Workshop</option>
            <option>Lecture</option>
            <option>Concert</option>
            <option>Exhibit</option>
            <option>Dj Set</option>
            <option>Cocktail</option>
            <option>Meeting</option>
            <option>Empty Space</option>
            <option>Other</option>
        </select>
        <br>
        Expected # of people: <input type="text"><br>
        Description: <input type="text"><br>
    </div>

    <div>
        <h2>Space</h2>
        Select space(s):
        <div class="row">
            <figure>
                <img class="floorplan" src="../../../img/floorplan.png" alt="">
                <figcaption>Ground Floor</figcaption>
            </figure>
            <figure>
                <img class="floorplan" src="../../../img/floorplan.png" alt="">
                <figcaption>Second Floor</figcaption>
            </figure>
            <figure>
                <img class="floorplan" src="../../../img/floorplan.png" alt="">
                <figcaption>Third Floor</figcaption>
            </figure>
        </div>
    </div>

    <div>
        <h2>Date and Time</h2>
        Select dates for the event:<br>
        <div class="row">
            <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;height=300&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=24bfeets83nltlu90frr67m6c8%40group.calendar.google.com&amp;color=%23B1365F&amp;ctz=Europe%2FRome" style="border-width:0" width="400" height="300" frameborder="0" scrolling="no"></iframe>

            <figure>
                <figcaption>Start Time</figcaption>
                <img class="clock" src="../../../img/clock.png" alt="">
            </figure>
            <figure>
                <figcaption>End Time</figcaption>
                <img class="clock" src="../../../img/clock.png" alt="">
            </figure>
        </div>
    </div>

    <div>
        <h2>Requirements</h2>
        <ul>
            <li><input type="checkbox"> Usher</li>
            <li><input type="checkbox"> Room Attendant</li>
            <li><input type="checkbox"> Mic</li>
            <li><input type="checkbox"> Speakers</li>
            <li><input type="text"> Chairs</li>
            <li><input type="text"> Tables</li>
        </ul>

    </div>


    <input type="submit">
    
    <div id="cost">
        Final Cost: € XXX.XX
    </div>



<!--

    <hr>


    <div>
        <h2>Type of Event</h2>
        <ul>
            <li>Seminar</li>
            <li>Conference</li>
            <li>Exhibit</li>
            <li>Concert</li>
            <li>Party/Cocktail</li>
            <li>Boardroom/Meeting</li>
            <li>Classroom</li>
            <li>Empty Space</li>
            <li>Custom Event</li>
        </ul>
    </div>

    <div>
        <h2>Dates</h2>
        Requested date(s):
        <input type="text" name="requestedDates">
        <br>
        Alternate date(s) requested:
        <input type="text" name="alternateDates">
        <br>
        <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;height=300&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=24bfeets83nltlu90frr67m6c8%40group.calendar.google.com&amp;color=%23B1365F&amp;ctz=Europe%2FRome" style="border-width:0" width="400" height="300" frameborder="0" scrolling="no"></iframe>
    </div>

    <div>
        <h2>Time of Event</h2>
        Start:
        <input type="text" name="startTime">
        End:
        <input type="text" name="endTime">
        <br>
        Time needed for room setup:
        <input type="text">
        Time room setup starts:
        <input type="text">
        <br>
        Time needed for room cleanup:
        <input type="text">
        Time room cleanup is finished:
        <input type="text">
    </div>

    <div>
        <h2>Event</h2>
        Event Title:
        <input type="text" name="eventTitle">
        <br>
        Description:
        <input class="description" type="text">
        <br>

        <div class="row">
            <div class="column">
                Is event within a series?
                <br>
                Yes<input type="radio" name="series">
                No<input type="radio" name="series">
                <br>
                Will any VIP's be attending?
                <br>
                Yes<input type="radio" name="VIP">
                No<input type="radio" name="VIP">
                <br>
                If so, list any special needs of the VIP(s)
                <br>
                <input type="text">
            </div>

            <div class="column">
                Will non-SerenDPT guests attend?
                <br>
                Yes<input type="radio" name="guests">
                No<input type="radio" name="guests">
                <br>
                If so, what portion of the guests will be external?
                <br>
                &lt50%<input type="radio" name="external">
                &gt=50%<input type="radio" name="external">
                <br>
                Will any external speakers, performers, or artists attend the event?
                <br>
                Yes<input type="radio" name="culture">
                No<input type="radio" name="culture">
                <br>
                If so, whom?
                <br>
                <input type="text">
            </div>
        </div>
    </div>

    <div>
        <h2>Location</h2>
        Preferred primary location: <input type="text">
        <br>
        Alternate location if primary is unavailable: <input type="text">
        <br>
        Alternate location if weather is non-permitting
        <br>
        Indoors<input type="radio" name="badWeather">
        Tent<input type="radio" name="badWeather">
        Alternate Date<input type="radio" name="badWeather">
        <br>
        Do you need additional spaces>
        Yes<input type="radio" name="additionalSpace">
        No<input type="radio" name="additionalSpace">
        <br>
        If so, please describe:
        <br>
        <input type="text">
    </div>

    <div>
        <h2>Catering</h2>
        Will food or beverage be served?
        <br>
        Yes<input type="radio" name="food">
        No<input type="radio" name="food">
        <br>
        If so, where will the food come from?
        <br>
        Food in-house <input type="text">
        <br>
        Caterer <input type="text">
        <br>
        Will alcohol be served at this event?
        <br>
        Yes<input type="radio" name="alcohol">
        No<input type="radio" name="alcohol">
        <br>
        What percentage of attendees will be over 18?
        <br>
        &lt50%<input type="radio" name="legal">
        &gt=50%<input type="radio" name="legal">
        100%<input type="radio" name="legal">
    </div>

    <div>
        <h2>Contact Info</h2>
        Name:<input type="text">
        <br>
        Email:<input type="text">
        <br>
        Phone number:<input type="text">
    </div>

    <input type="submit">
    -->
</form>
