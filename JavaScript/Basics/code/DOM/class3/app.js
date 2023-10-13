const item = document.getElementById('special')
console.log(item.firstChild.nodeValue)
console.log(item.textContent)

item.textContent = "two"


const special = document.querySelector('.special')

console.log(special)

const idKiValue = special.getAttribute('id')

console.log(idKiValue)

special.setAttribute('id', 'specialOne')

console.log(special)

const text = document.querySelector('h1')

function jaadu() {
    if(text.getAttribute('class') == 'hidden') {
        text.setAttribute('class', 'visible')
    } else {
        text.setAttribute('class', 'hidden')
    }
}














