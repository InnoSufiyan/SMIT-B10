// var tableIwant = prompt("k bhai konsa table chahiye")

// if(!isNaN(tableIwant)) {
//     for(let i = 1; i <=10; i++) {
//         document.write(tableIwant + " X " + i + " = " + (tableIwant * i) + " <br>")
//         // console.log(i, "==>> mera pyara i")
//     }
// } else {
//     alert("insan ban k number likho")
// }

const resturantWaley = ["biryani", "korma", "white karahi", "daal chawal", "tikka", "behari boti"]

const myDemand = prompt("kya khana hai")
//6

var myCounter
var foodFound = false

for (let i = 0; i < resturantWaley.length; i++) {
    if (resturantWaley[i] == myDemand) {
        foodFound = true
        myCounter = i
    }
}

console.log(myCounter, "==>myCounter")
      //0 falsy
      // true
if (true) {
    alert("Sorry jani tumhara food available nahin hai")
} else {
    alert("Haan jani khana available hai , counter number " + myCounter + " sey jaa k le lo")
}