const numbers = document.querySelectorAll('[data-number]')

Array.from(numbers).forEach((element) => {
    element.addEventListener('click', (e) => {

        if (getDisplay() == '0') {
            cleanDisplay()
        }

        if (newOperatorKey) {
            cleanDisplay()
            newOperatorKey = false
        }
        if (getDisplay().length <= 9)
            appendDisplay(element.innerHTML)
    })
})