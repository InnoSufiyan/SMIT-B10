// var tableIwant = prompt("k bhai konsa table chahiye")

// if(!isNaN(tableIwant)) {
//     for(let i = 1; i <=10; i++) {
//         document.write(tableIwant + " X " + i + " = " + (tableIwant * i) + " <br>")
//         // console.log(i, "==>> mera pyara i")
//     }
// } else {
//     alert("insan ban k number likho")
// }

// const resturantWaley = ["biryani", "korma", "white karahi", "daal chawal", "tikka", "behari boti"]

// const myDemand = prompt("kya khana hai")
// //6

// var myCounter
// var foodFound = false

// for (let i = 0; i < resturantWaley.length; i++) {
//     if (resturantWaley[i] == myDemand) {
//         foodFound = true
//         myCounter = i
//         break;
//     }
//     console.log(i)
// }

// console.log(myCounter, "==>myCounter")
//       //0 falsy
//       // true
// if (!foodFound) {
//     alert("Sorry jani tumhara food available nahin hai")
// } else {
//     alert("Haan jani khana available hai , counter number " + myCounter + " sey jaa k le lo")
// }


// const resturantWaley = ["biryani", "korma", " ", "white karahi", "daal chawal", "tikka", "behari boti"]

// for(let i = 0; i < resturantWaley.length; i++) {
//     if(resturantWaley[i] == " " || resturantWaley[i] == "daal chawal")  continue;
//     console.log("Counter number " + i + " per available hai, " + resturantWaley[i])
// }


const resturantWaley = ["biryani", "korma", "white karahi", "daal chawal", "tikka", "behari boti"]

const deal = ["cold drink", "raita", "salad", "french fries", "sweet dish"]

for(i = 0; i < resturantWaley.length; i++) {
    // console.log(i, resturantWaley[i] ,"====item")
    for(j = 0; j < deal.length; j++) {
        // console.log("Ek " + resturantWaley[i] + " kay saath ek " + deal[j] + " free", "==>> my deal")
        console.log(`Ek ${resturantWaley[i]} kay saath ek ${deal[j]} free`)
    }
}