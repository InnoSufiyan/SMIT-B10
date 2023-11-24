let answer = Math.ceil(Math.random() * 20)
let score = localStorage.getItem('score') || 20
console.log(answer, "answer ")
const userAnswer = document.querySelector('#userAnswer')
const remarks = document.querySelector('#remarks')

const scoreHtml = document.querySelector('#score')
const highScore = document.querySelector('#highScore')
const questionMark = document.querySelector('#questionMark')
scoreHtml.textContent = score

highScore.textContent = `HighScore: ${localStorage.getItem('high-score') || 0}`


function answerCheckHandler() {
    if (userAnswer.value == answer) {
        remarks.textContent = "User has won"
        document.body.style.backgroundColor = "green"
        if (userAnswer.value > localStorage.getItem('high-score')) {
            highScore.textContent = `HightScore: ${scoreHtml.textContent}`
            questionMark.textContent = `Score: ${answer}`
            localStorage.setItem('high-score', scoreHtml.textContent)
        }
    } else {
        remarks.textContent = userAnswer.value > answer ? "Too High" : "Too Low"
        scoreHtml.textContent = +scoreHtml.textContent - 1
    }
    localStorage.setItem('score', scoreHtml.textContent)
}

function againHandler() {
    scoreHtml.textContent = 20
    localStorage.removeItem('score')
    document.body.style.backgroundColor = "white"
    remarks.textContent = "Start Guessing ..."
    answer = Math.ceil(Math.random() * 20)
    console.log(answer, "<<<<<<<<=====answer ")
}
