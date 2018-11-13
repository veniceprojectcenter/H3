
/*var companyCards = document.getElementsByClassName('company-logo')

for (let companyCard of companyCards) {
    companyCard.hover(
        function() { // mouseenter
            var cardOverlay = getElementsByClassName('card-img-overlay')[0];
            cardOverlay.style.visibility = 'visible';
        },
        function() { // mouseexit
            var cardOverlay = getElementsByClassName('card-img-overlay')[0];
            cardOverlay.style.visibility = 'hidden';
        }
    )
}*/

// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle
$(document).ready(function() {
    $("#flip").hover(function() {
        $("#panel").slideToggle(300);
    });
});
