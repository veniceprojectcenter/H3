---
title: "Events"
---
<form>
    <h2>Event Title</h2>
    <input type="text" name="eventTitle">

    <h2>Dates</h2>
    Requested date(s):
    <input type="text" name="requestedDates">
    <br>
    Alternate date(s) requested:
    <input type="text" name="alternateDates">

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

    <h2>Event</h2>
    Description:
    <br>
    <input class="description" type="text">
    <br>
    **Style of Room**

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

    <h2>Contact Info</h2>
    Name:<input type="text">
    <br>
    Email:<input type="text">
    <br>
    Phone number:<input type="text">

</form>
