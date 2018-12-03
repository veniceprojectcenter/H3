
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

$(document).ready(function() {
    updatePage(window.location.pathname);
});
function updatePage(currPage) {
    resetHighlights();
    if (currPage == "/history/" || currPage == "/history") {
        $("#history-tab").addClass("highlighted");
    } else if (currPage == "/events/" || currPage == "/events") {
        $("#events-tab").addClass("highlighted");
    } else if (currPage == "/spaces/" || currPage == "/spaces") {
        $("#spaces-tab").addClass("highlighted");
    } else if (currPage == "/documents/" || currPage == "/documents") {
        $("#documents-tab").addClass("highlighted");
    }
}
function resetHighlights() {
    $('.nav-link').each(function(){
        $(this).removeClass("highlighted");
    });
}
