
function myFunction(){
    var x = document.getElementById("burger");
var close = document.getElementById("close");
    if (x.style.display === "block"){
        close.src = 'images/icon-close.svg';
    } else {
        close.src = 'images/icon-hamburger.svg';
    }
}