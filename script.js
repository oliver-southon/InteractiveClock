// CLOCK
function currentTime() {
    var date = new Date(); // create date obj
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; // add time to div
    var t = setTimeout(function(){ currentTime() }, 1000); // setting timer

}

function updateTime(k) { // for formatting
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

function changeFont(name) {
    if (name == "sans") {
        document.getElementById("clock").style.fontFamily = "sans-serif"
    }
    else if (name == "orb") {
        document.getElementById("clock").style.fontFamily = "Orbitron"
    }
}

currentTime();