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

// var fruits = ["aam", "orangi", "banana", "grapes", "apples", "strawberry"]

// console.log(fruits.length, "===>>length")
//6
// fruits[fruits.length + 5] = "kuch bhi"

// fruits[fruits.length] = 47

// // console.log(fruits, "==>>my fruits")

// var myFruit = fruits[0]

// fruits[fruits.length - 1] = "amrood"

// console.log(myFruit)
// console.log(fruits)



const students = [
    {
        name: "aslam",
        id: 1,
        score: 75,
        fvrtSubj: "history"
    },
    {
        name: "aslam",
        id: 1,
        score: 75,
        fvrtSubj: "maths"
    },
    {
        name: "aslam",
        id: 1,
        score: 75,
        fvrtSubj: "urdu"
    },
    {
        name: "aslam",
        id: 1,
        score: 75,
        fvrtSubj: "maths"
    },
    {
        name: "salman",
        id: 2,
        score: 90,
        fvrtSubj: "english"
    },
    {
        name: "furqan",
        id: 1,
        score: 90,
        fvrtSubj: "english"
    },
    {
        name: "farhan",
        id: 1,
        score: 63,
        fvrtSubj: "maths"
    },
    {
        name: "kamran",
        id: 1,
        score: 71,
        fvrtSubj: "urdu"
    }
]


// const totalScore = students.reduce(function (puraniValue, current) {
//     return puraniValue + current.score
// }, 0)

// console.log(totalScore / students.length, "===>>totalScore")

const survey = students.reduce(function (prev, curr) {
    // console.log(prev, "===>>previous")       //{history: 1, maths: 2, urdu

    if (prev.hasOwnProperty(curr.fvrtSubj)) {         // english true
        prev[curr.fvrtSubj] = prev[curr.fvrtSubj] + 1    //curr.maths = curr.maths + 1
        return prev                               //{history: 1, maths: 2, urdu: 1}
    } else {
        // console.log(false)
        prev[curr.fvrtSubj] = 1                     //{history: 1, maths: 1}.urdu = 1
        //{history: 1}.maths = 1
        return prev                                // {history: 1, maths: 1, urdu: 1}
    }
}, {})

console.log(survey, "==>>survey")