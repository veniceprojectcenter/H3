
// Companies
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle
$(document).ready(function() {
    $("#flip").hover(function() {
        $("#panel").slideToggle(300);
    });
});

// Barba.js
var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
        Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
    },
    fadeOut: function() {
        return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },
    fadeIn: function() {
        /**
         * this.newContainer is the HTMLElement of the new Container
         * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
         * Please note, newContainer is available just after newContainerLoading is resolved!
         */

        var _this = this;
        var $el = $(this.newContainer);

        $(this.oldContainer).hide();

        $el.css({
          visibility : 'visible',
          opacity : 0
        });

        $el.animate({ opacity: 1 }, 200, function() {
          _this.done(); // automatically remove the DOM from the old Container
        });
    }
});

Barba.Pjax.getTransition = function() {
  return FadeTransition;
};




var loadPage = Barba.BaseView.extend({
    namespace: 'page',
    onEnterCompleted: function() {
        controller = controller.destroy(true);
        controller = new ScrollMagic.Controller({addIndicators: false});
        addScrollMagic();
        if (window.location.pathname == "/eventform" || window.location.pathname == "/eventform/") {
            loadVenueSelection();
        }
    }
});

var controller = new ScrollMagic.Controller({addIndicators: false});

$(document).ready(function() {
    loadPage.init()
    Barba.Pjax.start();
});


//var controller = new ScrollMagic.Controller({addIndicators: true});
//addScrollMagic();










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
            triggerHook: 0.8,
            reverse: false
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
        parallaxTl.from('.parallax-text', 0.2, {autoAlpha: 0, ease:Power0.easeNone}, 0.1)
            .from('.parallax-image', 1, {y: '-30%', ease:Power0.easeNone}, 0);

        var slideParalllaxScene = new ScrollMagic.Scene({
            triggerElement: '.parallax',
            triggerHook: 1,
            duration: '120%'
        })
        .setTween(parallaxTl)
        .addTo(controller);
    });

}
