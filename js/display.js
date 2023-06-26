const display = document.getElementById('display')

setDisplay('0')

function appendDisplay(value) {
    display.innerText += value
}

function cleanDisplay() {
    display.innerText = ''
}

function getDisplay() {
    return display.innerText
}

function setDisplay(number) {
    const numberString = number.toString();
    let integerPart = numberString.split('.')[0]
    let decimalPart = numberString.split('.')[1]
    let dot = '.'


    if (numberString.includes('.')) {
        const integerPartLength = integerPart.length;
        const decimalPartLength = decimalPart.length;

        if (integerPartLength > 9) {
            integerPart = parseInt(integerPart).toExponential(2)
        }

        if (integerPartLength + decimalPartLength > 9) {
            decimalPart = decimalPart.slice(0, 9 - integerPartLength)
        }

        if (decimalPart == '') {
            dot = ''
        }
        display.innerText = integerPart + dot + decimalPart
    }
    else {

        if (numberString.length > 9) {
            integerPart = parseInt(integerPart).toExponential(2)
            display.innerText = integerPart
        }
        else {
            display.innerText = number
        }

    }
}