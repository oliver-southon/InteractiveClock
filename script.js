
//CLOCK
function startTime() {
    var today = new Date();
    var hrs = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var timeZone = today.getTimezoneOffset();
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("timezone").innerHTML = timezone
    document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i; //adds zero in front of numbers
    }
    return i;
}