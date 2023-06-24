const btnClean = document.querySelector('[data-clean]')
btnClean.addEventListener('click', () => {
    cleanDisplay()
    newOperatorKey = false
    clickOp = 0
    firstOperator = 0
    secondOperator = 0
})

const btnErase = document.querySelector('[data-erase]')
btnErase.addEventListener('click', () => {
    setDisplay(getDisplay().slice(0, getDisplay().length - 1))
})

const btnPercent = document.querySelector('[data-percent]')
btnPercent.addEventListener('click', () => {
    let percentNumber = parseFloat(getDisplay()) / 100
    setDisplay(percentNumber)
})