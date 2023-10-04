// // var number = prompt("Dil main pehley number per kon hai")

// // var arr = ["girl friend", "Beghum"]

// // alert(arr[number])


// // const student1 = "saqib"
// // const student2 = "fahad"
// // const student3 = "zain"
// // const student4 = "abbas"

// // const students = ["saqib", "fahad", "zain", "abbas"] //arrays
// //                       //0           //1        //2          //3
// // const bakeryShelf = ["pasteries", "paapay", "plain cake", "chips", "biscuits", "bun", "pepsi", 25, null, undefined, "chaaclate"]

// // let whichItemNumber = prompt("Which item do you need, kindly tell the number")

// // alert("Here you are with your product " + bakeryShelf[whichItemNumber])
// // alert("Here you are with your product " + bakeryShelf[bakeryShelf.length - 7])

// // alert("Seth sahab, aap k peson sey, total " + bakeryShelf.length + " products rakhey hain bakery main")

// const menu = ["daal chawal", "bhindi", "white karahi", "torai", "tikka biryani"]

// // console.log(menu)

// // menu[2] = "aalo palak"

// // console.log(menu)

// // const name = "sufiyan"

// // name = "farhan"

// let name = "sufiyan"

// let name2 = name    //sufiyan

// console.log(name, name2)
// name = "farhan"

// console.log(name, name2)
//                          //a           //b          //c           //d          //e
// let foodMenuOffice1 = ["daal chawal", "bhindi", "white karahi", "torai", "tikka biryani"]
//                     //    a  b  c   d  e
// let foodMenuOffice2 = foodMenuOffice1

// console.log(foodMenuOffice1)
// console.log(foodMenuOffice2)
//                        //c
// foodMenuOffice2[2] = "aalo palak"

// console.log(foodMenuOffice1)
// console.log(foodMenuOffice2)

var fruits = ["aam", "orangi", "banana", "grapes", "apples", "strawberry"]

// console.log(fruits.length, "===>>length")
//6
// fruits[fruits.length + 5] = "kuch bhi"

// fruits[fruits.length] = 47

// // console.log(fruits, "==>>my fruits")

// var myFruit = fruits[0]

// fruits[fruits.length - 1] = "amrood"

// console.log(myFruit)
// console.log(fruits)



const people = [
    { name: "fahad", age: 36, position: "NLE" },
    { name: "mohsin", age: 17, position: "student" },
    { name: "saqib", age: 26, position: "shopkeeper" }
]

const myDiv = document.getElementsByTagName('div')

// const peopleMoreThan20YearsAge = people.map(function(akela) {
//     if(akela.age >= 20) {
//         return akela
//     }
//     console.log(akela)
// })

// people.map((people)=> {
//     myDiv[0].innerText = people.name
// })

// const peopleMoreThan20 = people.filter(function (ppl) {
//     if (ppl.age <= 20) {
//         return ppl
//     }
// })

// console.log(peopleMoreThan20, "==>> peopleMorethan20")


// const foodSchedule = [
//     "biryani", "daal", "subzi", "korma", "biryani", "subzi"
// ]

// const biryaniHowManyTimes = foodSchedule.filter(function(food) {
//     if(food === "biryani") {
//         return true
//     }
// })

// console.log(biryaniHowManyTimes)

// const birArr = biryaniHowManyTimes.map(function(biryani) {
//     return "bir"
// })

// console.log(birArr,"==>>birArr")


// const arr = [
//     0,1,2,3,4,5,6,7,8,9
// ]

// const selectedValues = arr.filter(function(val) {
//     if(val > 1 && val < 9) return true
// }).map(function(val) {
//     return val * val
// })

// var userDemand = +prompt("How much is your budget")
// var companyName = prompt("konsi company ka chahiye")

const mobilePhones = [
    // { name: "samsung", modelNo: "S20", price: "100000" },
    { name: "samsung", modelNo: "S21", price: "200000" },
    { name: "samsung", modelNo: "S21", price: "200000" },
    { name: "iphone", modelNo: "15proMax", price: "900000" },
    { name: "nokia", modelNo: "3310", price: "7200" },
    { name: "infinix", modelNo: "note30", price: "60000" },
    { name: "techno", modelNo: "cam120", price: "55000" },
]

// const displayItem = mobilePhones.filter(function(mobile){
//     if(mobile.price >= userDemand) return true
// }).map(function(mobile){
//     return `we have a phone of company ${mobile.name} and its model number is  ${mobile.modelNo} and it will cost you ${mobile.price} Rs`
// })

// const singleDisplayItem = mobilePhones.find(function (mobile) {
//     if (mobile.price == 200000) return true
// }
// )

const students = [
    {name: "std1", score: 65, id: 1},
    {name: "std2", score: 85, id: 2},
    {name: "std3", score: 82, id: 3},
    {name: "std4", score: 955, id: 4},
    {name: "std5", score: 95, id: 5},

]

// const highScores = students.filter(function(std) {
//     if(std.score >= 80) return true
// }).map(function(selectedStudents){
//     return selectedStudents.name
// })

// console.log(highScores)

const specificId = students.find(function(std){
    return std.id == 4
}).score

console.log(specificId)