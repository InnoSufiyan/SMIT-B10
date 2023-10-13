const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'violet']

var colorName = document.querySelector('span')


function colorHandler() {
    const randomGeneratedNumber = Math.floor(Math.random() * 6)
    console.log("chal gaya")
    console.log(randomGeneratedNumber)
    colorName.textContent = colors[randomGeneratedNumber]
    document.body.style.backgroundColor = colors[randomGeneratedNumber]
}