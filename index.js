
function myFunction(){
    let x = document.getElementById("burger");
let close = document.getElementById("close");
let logs = document.getElementById("logs");

    if (logs.style.display === "block"){
        close.src = "images/icon-hamburger.svg";
        logs.style.display = "none";
    } else {
        close.src = "images/icon-close.svg";
        logs.style.display = "block";
    }
}