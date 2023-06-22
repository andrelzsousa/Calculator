const operations = document.querySelectorAll('[data-operation]')
let newOperatorKey = false
let clickOp = 0
let operators = []
let firstOperator
let secondOperator

Array.from(operations).forEach((element) => {
    element.addEventListener('click', () => {

        if (clickOp == 0) {
            firstOperator = getOperator()
            newOperatorKey = true
            clickOp++
        }
        else if (clickOp == 1) {
            secondOperator = getOperator()
            console.log(firstOperator, secondOperator)
            clickOp = 0

            // switch (element.innerHTML) {
            //     case "+":
            //         sum()
            //         break
            //     case "-":
            //         sub()
            //         break
            //     case "x":
            //         mul()
            //         break
            //     case "/":
            //         div()
            //         break
            // }
        }








    })
})

function getOperator() {
    return getDisplay()
}
