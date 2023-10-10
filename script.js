var h1 = document.getElementsByTagName("h1")[0]
var start = document.getElementById("start")
var pause = document.getElementById("pause")
var stoop = document.getElementById("stoop")
var sec = 0
var min = 0
var hrs = 0
var t


function chronometre() {
    sec++
    if (sec >= 60) {
        sec = 0
        min++
        if (min >= 60) {
            min = 0
            hrs++
        }
    }
}
function ajouter() {
    chronometre()
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs)
        + ":" + (min > 9 ? min : "0" + min)
        + ":" + (sec > 9 ? sec : "0" + sec)
    decompte()
}
function decompte() {
    t = setTimeout(ajouter, 1000)
}

start.onclick = decompte
pause.onclick = function () {
    clearTimeout(t)
}
stoop.onclick = function () {
    h1.textContent = "00:00:00"
    secondes = 0; minutes = 0; heures = 0;
    sec = 0
}
