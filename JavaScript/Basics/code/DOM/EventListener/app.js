const paragraph = "This is a paragraph. It is a very long, long paragraph. It contains many sentences that are long. Long sentences are bad. Make sentences short again. Short sentences are easier to read. They are also easier to write."

const para = document.querySelector('p');

para.textContent = paragraph.slice(0, 10) + " ...";

const button = document.querySelector('button');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');

// button.setAttribute('onclick', 'showMore()');
// button.addEventListener('click', showMore)


// button.addEventListener('click', (event) => {
//     console.log(event.target)
//     event.currentTarget.textContent = "see less"
//     // console.log(this.textContent)
// })
// button.addEventListener('click', function (event) {
//     console.log(event.target)
//     event.currentTarget.textContent = "see less"
//     // console.log(this.textContent)
// })

// button.addEventListener('click', (event) => event.currentTarget.textContent = "see less")
// button.addEventListener('click', event => event.currentTarget.textContent = "see less")
// button.addEventListener('click', (event) => console.log(event.currentTarget))
button.addEventListener('click', () => console.log(this))

// const showMore = () => {
//     para.textContent = paragraph;
//     button.textContent = "Show Less";
//     button.setAttribute('onclick', 'showLess()');
// }




function showMore() {
    para.textContent = paragraph;
    button.textContent = "Show Less";
    button.setAttribute('onclick', 'showLess()');
}

function showLess() {
    para.textContent = paragraph.slice(0, 10) + " ...";
    button.textContent = "Show More";
    button.setAttribute('onclick', 'showMore()');
}

var numOfFontSize = 16

plus.setAttribute('onclick', 'increase()');
minus.setAttribute('onclick', 'decrease()');

function increase() {
    para.style.fontSize = `${++numOfFontSize}px`   //5px
}
function decrease() {
    para.style.fontSize = `${--numOfFontSize}px`   //5px
}

// function addNumber(num) {
//     return num + 1
// }

// function (num) {

// }

// const addNumber = (num) => {
//     return num + 1
// }
// const addNumber = (num) => num + 1

// const addNumber = (num1, num2) => {
//     let numberAddition = num1 + num2
//     if (numberAddition > 10) return numberAddition * 5

// }

// addNumber(6, 7)