
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


/*var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '#carousel', // starting scene, when reaching this element
  duration: 400 // pin the element for a total of 400px
})
.setPin('#carousel'); // the element we want to pin

// Add Scene to ScrollMagic Controller
controller.addScene(scene);*/

$(function() {
    var controller = new ScrollMagic.Controller();

    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#container',
        duration: 500
    })
    .setPin('#block')
    .addIndicators()
    .addTo(controller);

});
