var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var menuClose = document.getElementById("menuClose");

menuBtn.onclick = function() {
    menu.style.visibility = 'visible';
}

menuClose.onclick = function() {
    menu.style.visibility = 'hidden';
}
