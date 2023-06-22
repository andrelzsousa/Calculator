const display = document.getElementById('display')


function appendDisplay(value) {
    display.innerText += value
}

function cleanDisplay() {
    display.innerText = ''
}

function getDisplay() {
    return display.innerText
}

function setDisplay(param) {
    display.innerText = param
}