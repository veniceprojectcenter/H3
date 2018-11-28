
// Companies
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle
$(document).ready(function() {
    $("#flip").hover(function() {
        $("#panel").slideToggle(300);
    });
});


var loadPage = Barba.BaseView.extend({
    namespace: 'page',
    onEnterCompleted: function() {
        controller = controller.destroy(true);
        controller = new ScrollMagic.Controller({addIndicators: false});
        addScrollMagic();
    }
});

var controller = new ScrollMagic.Controller({addIndicators: false});

$(document).ready(function() {
    loadPage.init()
    Barba.Pjax.start();
});

//var controller = new ScrollMagic.Controller({addIndicators: true});
//addScrollMagic();






function rotateText() {
    setTimeout(fo, 5000);
    setTimeout(fi, 5000);
}
function fo() {
    $('.rotating-text').each(function(){
        $(this).fadeOut(100, function() {});
    });
}
function fi() {
    $('.rotating-text').each(function(){
        $(this).fadeIn(100, function() {});
    });
}
//rotateText();






// SCROLL MAGIC

//var controller = new ScrollMagic.Controller({addIndicators: true});
//addScrollMagic();

function addScrollMagic() {
    addFade();
    addPin();
    addParallax();
}

function addFade() {
    $('.fade-container').each(function(){
        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8
        })// trigger a velocity opaticy animation
        .setClassToggle(this, 'fade-in')
        .addTo(controller);
    });
}

function addPin() {
    $('.pin-at-top').each(function(){
        var pinIntroScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0
        })// trigger a velocity opaticy animation
        .setPin(this)
        .addTo(controller);
    });
    $('.pin-page').each(function(){
        var pinIntroScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0
        })// trigger a velocity opaticy animation
        .setPin(this)
        .addTo(controller);
    });
}

function addParallax() {
    $('.parallax').each(function(){
        var parallaxTl = new TimelineMax();
        parallaxTl
            .from('.parallax-text', 0.2, {autoAlpha: 0, ease:Power0.easeNone}, 0.1)
            .from('.parallax-image', 1, {y: '-30%', ease:Power0.easeNone}, 0)
            ;

        var slideParalllaxScene = new ScrollMagic.Scene({
            triggerElement: '.parallax',
            triggerHook: 1,
            duration: '120%'
        })
        .setTween(parallaxTl)
        .addTo(controller);
    });

}




// Navbar disappears when scrolling down, reappears scrolling up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var scroll = $(window).scrollTop();

    if (prevScrollpos > currentScrollPos) {
        // if the user scrolls up
        $("nav").css("top", "0");
        $("nav").addClass("scrolled");
    } else if (scroll > 15) {
        $("nav").css("top", "-60px");
        $("nav").removeClass("scrolled");
    }

    prevScrollpos = currentScrollPos;
};
