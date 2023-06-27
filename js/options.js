const btnClean = document.querySelector('[data-clean]')
btnClean.addEventListener('click', () => {
    setDisplay('0')
    newOperatorKey = false
    clickOp = 0
    firstOperator = 0
    secondOperator = 0
    result = 0
    operations.forEach((element) => {
        element.classList.remove('list__operacao_selection')
    })
})

const btnErase = document.querySelector('[data-erase]')
btnErase.addEventListener('click', () => {
    setDisplay(getDisplay().slice(0, getDisplay().length - 1))
    if (getDisplay() == '') {
        setDisplay('0')
    }
})

const btnPercent = document.querySelector('[data-percent]')
btnPercent.addEventListener('click', () => {
    let percentNumber = parseFloat(getDisplay()) / 100
    setDisplay(percentNumber)
})