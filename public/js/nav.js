
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


function updatePage(currPage) {

    resetHighlights();
    if (currPage == "History") {
        $("#history-tab").addClass("highlighted");
    } else if (currPage == "Events") {
        $("#events-tab").addClass("highlighted");
    } else if (currPage == "Spaces") {
        $("#spaces-tab").addClass("highlighted");
    } else if (currPage == "Documents") {
        $("#documents-tab").addClass("highlighted");
    }
}

function resetHighlights() {

}
