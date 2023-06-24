const operations = document.querySelectorAll('[data-operation]')
let newOperatorKey = false
let clickOp = 0
let firstOperator
let secondOperator
let result

Array.from(operations).forEach((element) => {
    element.addEventListener('click', () => {

        if (clickOp == 0) {


            if (element.innerHTML == '=') {
                result = makeOperation(result, secondOperator, opType)
                setDisplay(result)
            }
            else {
                firstOperator = getOperator()
                newOperatorKey = true
                clickOp++
                opType = element.innerHTML
            }


        }
        else if (clickOp == 1) {
            secondOperator = getOperator()

            result = makeOperation(firstOperator, secondOperator, opType)
            setDisplay(result)

            firstOperator = result

            if (element.innerHTML == '=') {
                clickOp = 0
            }
            newOperatorKey = true
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
