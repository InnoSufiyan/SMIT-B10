const number = document.querySelector('#number')
// const buttons = document.querySelectorAll('button')

console.log(number)
// console.log(buttons)

function increment() {
    console.log("increment", number.textContent)
    number.textContent = +(number.textContent) + 1
}
function decrement() {
    if(number.textContent == 0) return
    console.log("decrement", number.textContent)
    number.textContent = number.textContent - 1
}
function reset() {
    console.log("reset", number.textContent)
    number.textContent = 0
}

function add(a,b) {
    return a + b
}

add(5,2)