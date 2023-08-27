// var biryaniShopIsOpen = true
// var isBiryaniGaram = true
// var isPilaoGaram = true 
// var fastFoodShopIsOpen = true
// var isZingerAvailable = false
// var daalChawalIsOpen = true
// var isHygenic = false

if (biryaniShopIsOpen && (isBiryaniGaram || isPilaoGaram) ) {
    if(isBiryaniGaram) {
        alert("biryani le aana")
    } else {
        alert("pilaow le aana")
    }
} else if (fastFoodShopIsOpen && isZingerAvailable) {
    alert("fast food le aana")
} else if (daalChawalIsOpen && isHygenic) {
    alert("bring daal chawal")
} else {
    alert("bring biscuits")
}

// var percentage = prompt("Write your percentage")

// if(percentage >= 80) {
//     alert("A1 grade")
// } else if (percentage < 80 && percentage >= 70) {
//     alert("A Grade")
// } else if (percentage < 70 && percentage >= 60) {
//     alert("B Grade")
// } else if (percentage < 60 && percentage >= 50) {
//     alert("C Grade")
// } else if (percentage < 50 && percentage >= 40) {
//     alert("D Grade")
// } else {
//     alert("F Grade")
// }

var sm = false
var md = true
var isBlack = false
var lg = false
var xl = false


if (sm || (md || isBlack) || lg || xl ) {
    alert("shirt mil gai")
} else {
    alert("apney matlab ki koi nahin")
}