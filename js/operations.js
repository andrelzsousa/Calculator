const operations = document.querySelectorAll('[data-operation]')
let newOperatorKey = false
let clickOp = 0
let firstOperator
let secondOperator
let result

Array.from(operations).forEach((element) => {
    element.addEventListener('click', (e) => {

        if (clickOp == 0) {
            if (element.innerHTML == '=') {
                if (typeof (opType) != "undefined") {
                    result = makeOperation(result, secondOperator, opType)
                    setDisplay(result)
                }
            }
            else {
                firstOperator = getOperator()
                newOperatorKey = true
                clickOp++
                opType = element.getAttribute('value')
                console.log(element)
            }


        }
        else if (clickOp == 1) {
            secondOperator = getOperator()

            if (opType != element.getAttribute('value') && element.getAttribute('value') != '=') {
                clickOp = 1
                opType = element.getAttribute('value')
            }
            else {
                result = makeOperation(firstOperator, secondOperator, opType)
                setDisplay(result)

                firstOperator = result

                if (element.getAttribute('value') == '=') {
                    clickOp = 0
                }
                newOperatorKey = true
            }
        }
    })
})

function getOperator() {
    if (getDisplay() == "") {
        return "0"
    }
    return getDisplay()
}

function makeOperation(a, b, type) {

    if (typeof (a) == "string") {
        a = (a.includes(".")) ? parseFloat(a) : parseInt(a)
    }
    if (typeof (b) == "string") {
        b = (b.includes(".")) ? parseFloat(b) : parseInt(b)
    }

    switch (type) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "x":
            return a * b
        case "/":
            return a / b
    }
}
