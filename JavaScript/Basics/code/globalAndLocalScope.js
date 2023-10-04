// let name2 = "farhan"

// console.log(name2, "==>> name2")


// {
//     let name = "sufiyan"

//     console.log(name, "==>> name")
//     console.log(name2, "==>> name2")

//     var name3 = "salman"
// }


// let name = "kamran"
// console.log(name, "==>> baahir wala")
// console.log(name3, "==>> baahir wala with var")

// console.log("higher order and call back functions")

// function capitalLetterConvertor(name) {
//     return name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()
// }

// function welcome(name, callBack) {
//     var capitalLetters = callBack(name)
//     console.log("Welcome to the website, Mr " + capitalLetters)
// }

// function guide(name) {

//     console.log(`${capitalLetterConvertor(name)} bhai agar aap ko hamarey baaarey main aur jankaari chahiye to about section main jaa saktey hain`)
// }

// welcome("fahAD", capitalLetterConvertor)
// welcome("saQIb", capitalLetterConvertor)
// welcome("sUFIyan", capitalLetterConvertor)

// guide("fahAD")

const people = [
    { name: "noman", age: 56, position: "developer" },
    { name: "haroon", age: 156, position: "baateyn" },
    { name: "saqib", age: 75, position: "shohar" },
    { name: "ehtisham", age: "pata nahin", position: "HR" }
]

// for(let i = 1; i < people.length -1; i++) {
//     console.log(`Hi , my name is ${people[i].name}, and i am ${people[i].name.age} years old , and my work is ${people[i].name.position}`, "====>>value")
// }

// // people.forEach(function(student) {
// //     console.log(`Hi , my name is ${student.name}, and i am ${student.age} years old , and my work is ${student.position}`, "====>>value")
// // })


// const foodMenu = ["biryani", "korma", "salad"]

// foodMenu.forEach(function(food) {
//     document.write(food + " , ")
// })

// people.forEach(function(val) {
//     val.name = val.name.toUpperCase()
//     console.log(val)
// })

// const peopleArr = people.map(function(student) {
//     return student
// })

// console.log(peopleArr)

const students = [
    {
        id: 1,
        name: "saqib",
        score: 35,
        favSubject: "Maths"
    },
    {
        id: 1,
        name: "farhan",
        score: 25,
        favSubject: "Maths"
    },
    {
        id: 1,
        name: "kamran",
        score: 20,
        favSubject: "english"
    },
    {
        id: 1,
        name: "aslam",
        score: 15,
        favSubject: "urdu"
    },
    {
        id: 1,
        name: "salman",
        score: 45,
        favSubject: "Maths"
    },
]

const updatedStudents = students.map(function (student) {
    return {
        id: student.id, name: student.name, score: student.score,
        favSubject: student.favSubject, role: 'student'
    }
})

