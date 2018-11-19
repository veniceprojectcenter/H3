
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



function rotateText() {
        setTimeout(fo, 5000);
        setTimeout(fi, 5000);
}
function fo() {
    $('.rotating-text').each(function(){
        $(this).fadeOut(100, function() {})
    }
}
function fi() {
    $('.rotating-text').each(function(){
        $(this).fadeIn(100, function() {})
    }
}
rotateText();





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



var parallaxTl = new TimelineMax();
parallaxTl
    .from('.parallax-text', 0.2, {autoAlpha: 0, ease:Power0.easeNone}, 0.2)
    .from('.parallax-image', 1, {y: '-30%', ease:Power0.easeNone}, 0)
    ;

var slideParalllaxScene = new ScrollMagic.Scene({
    triggerElement: '.parallax',
    triggerHook: 1,
    duration: '120%'
})
.setTween(parallaxTl)
.addTo(controller);


/*$('.card-image').each(function(){
    var cw = $(this).width();
    $(this).css({'height':cw+'px'});
});*/
