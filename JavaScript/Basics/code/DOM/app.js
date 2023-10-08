const darkBtn = document.getElementById('darkBtn')
const lightBtn = document.getElementById('lightBtn')
document.body.style.background = 'black'
document.body.style.color = 'white'

const bulb = document.getElementById('bulb')

console.log(bulb, "-=-->> bulb")

function onHandler() {
    darkBtn.style.display = 'none'
    lightBtn.style.display = 'block'
    bulb.src = './assets/bulbOn.jpg'
}
function offHandler() {
    lightBtn.style.display = 'none'
    darkBtn.style.display = 'block'
    bulb.src = './assets/bulbOff.jpg'
}