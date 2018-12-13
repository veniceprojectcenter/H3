/*
 *  scrollDown() - will scroll down to the defined scroll target
 */
function scrollDown() {
    $('html,body').animate({scrollTop: $("#scroll-target").offset().top}, 'slow');
}
