const operations = document.querySelectorAll('[data-operation]')
let newOperatorKey = false
let clickOp = 0
let firstOperator
let secondOperator

Array.from(operations).forEach((element) => {
    element.addEventListener('click', () => {

        if (clickOp == 0) {
            firstOperator = getOperator()
            newOperatorKey = true
            clickOp++
            opType = element.innerHTML
        }
        else if (clickOp == 1) {
            secondOperator = getOperator()
            clickOp = 0

            let result = makeOperation(firstOperator, secondOperator, opType)
            setDisplay(result)
            newOperatorKey = true

            //console.log(`${firstOperator} ${opType} ${secondOperator} = ${result}`)
        }
    })
})

function getOperator() {
    return getDisplay()
}

function makeOperation(a, b, type) {
    a = parseInt(a)
    b = parseInt(b)
    console.log(a, b)
    console.log(type)
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
