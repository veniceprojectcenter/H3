var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var menuClose = document.getElementById("menuClose");
var header = document.getElementById("header");
var homeContent = document.getElementById("home-content");
var baseContent = document.getElementById("base-content");

menuBtn.onclick = function() {
    menu.style.visibility = 'visible';
    $(header).addClass('blur');
    $(homeContent).addClass('blur');
    $(baseContent).addClass('blur');
}

menuClose.onclick = function() {
    menu.style.visibility = 'hidden';
    $(header).removeClass('blur');
    $(homeContent).removeClass('blur');
    $(baseContent).removeClass('blur');
}
