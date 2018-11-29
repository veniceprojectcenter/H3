$("#scroll-down").click(function() {
    $('html,body').animate({
        scrollTop: $("#scroll-target").offset().top},
        'slow');
});
