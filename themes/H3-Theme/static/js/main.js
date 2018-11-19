
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

// Companies
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle
$(document).ready(function() {
    $("#flip").hover(function() {
        $("#panel").slideToggle(300);
    });
});



// SCROLL MAGIC

var controller = new ScrollMagic.Controller({addIndicators: true});

$('.fade-container').each(function(){
    var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.8
    })// trigger a velocity opaticy animation
    .setClassToggle(this, 'fade-in')
    .addTo(controller);
});

$('.pin-at-top').each(function(){
    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0
    })// trigger a velocity opaticy animation
    .setPin(this)
    .addTo(controller);
});
