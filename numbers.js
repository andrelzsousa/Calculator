const numbers = document.querySelectorAll('[data-number]')

Array.from(numbers).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (newOperatorKey) {
            cleanDisplay()
            newOperatorKey = false
        }
        appendDisplay(element.innerHTML)
    })
})