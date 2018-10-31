var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");

menuBtn.onclick = function() {
    if (menu.style.visibility == 'visible') {
        menu.style.visibility = 'hidden';
    }
    else {
        menu.style.visibility = 'visible';
    }
}
