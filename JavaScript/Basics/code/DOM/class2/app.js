var userName = prompt("What is your name")
var myName = document.getElementById('myName')

console.log(myName, "===>>myName")

if(userName.toLowerCase() === "sufiyan") {
    document.body.style.backgroundColor = 'black'
}