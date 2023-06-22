const numbers = document.querySelectorAll('[data-number]')

Array.from(numbers).forEach((element) => {
    element.addEventListener('click', () => {
        console.log(element)
        showDisplay(element.innerHTML)
        console.log(parseInt(display.innerHTML))
    })
})