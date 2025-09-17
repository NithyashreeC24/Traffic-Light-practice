let stopbuttonelement = document.getElementById("stopButton");
let readybuttonelement = document.getElementById("readyButton");
let gobuttonelement = document.getElementById("goButton");

let stoplightelement = document.getElementById("stopLight");
let readylightelement = document.getElementById("readyLight");
let golightelement = document.getElementById("goLight");

function turnOnRed() {
    stopbuttonelement.style.backgroundColor = "#cf1124";
    stoplightelement.style.backgroundColor = "#cf1124";
    readybuttonelement.style.backgroundColor = "#4b5069";
    readylightelement.style.backgroundColor = "#4b5069";
    gobuttonelement.style.backgroundColor = "#4b5069";
    golightelement.style.backgroundColor = "#4b5069";
}

function turnOnYellow() {
    readybuttonelement.style.backgroundColor = "#f7c948";
    readylightelement.style.backgroundColor = "#f7c948";
    stopbuttonelement.style.backgroundColor = "#4b5069";
    stoplightelement.style.backgroundColor = "#4b5069";
    gobuttonelement.style.backgroundColor = "#4b5069";
    golightelement.style.backgroundColor = "#4b5069";
}

function turnOnGreen() {
    gobuttonelement.style.backgroundColor = "#199473";
    golightelement.style.backgroundColor = "#199473";
    stopbuttonelement.style.backgroundColor = "#4b5069";
    stoplightelement.style.backgroundColor = "#4b5069";
    readybuttonelement.style.backgroundColor = "#4b5069";
    readylightelement.style.backgroundColor = "#4b5069";
}
