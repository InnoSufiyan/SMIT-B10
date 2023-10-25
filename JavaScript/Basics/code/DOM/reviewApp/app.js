const banday = [
    {
        imgSrc: "https://i.ytimg.com/vi/SLQD0iZ39IE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGEMgQSh_MA8=&rs=AOn4CLC1sOTiud6GTyABVSzFeAXguVFqpA",
        name: "Sufiyan",
        designation: "Developer",
        desc: "sdijlfslkjgfhf"
    },
    {
        imgSrc: "https://3.bp.blogspot.com/-F5nfub6YteA/UrAXJE7A-OI/AAAAAAAAABA/cgMjtnU_ldY/s1600/husband-wife-sms-message.jpg",
        name: "Saqib",
        designation: "Husband",
        desc: "humesha sunta rehta hun"
    },
    {
        imgSrc: "https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg",
        name: "Noman",
        designation: "Developer",
        desc: "sdijlfslkjgfhf"
    },
    {
        imgSrc: "https://www.betterteam.com/images/film-editor-job-description-4081x2716-2020125.jpeg?crop=16:9,smart&width=1200&dpr=2",
        name: "Fahad",
        designation: "Editor",
        desc: "sdijlfslkjgfhf"
    },
    {
        imgSrc: "https://images.inuth.com/2017/05/1Paresh-Rawals-Hasmukhlal-in-Judaai.jpg",
        name: "Haroon",
        designation: "Questioner",
        desc: "sdijlfslkjgfhf"
    },
]

const img = document.querySelector('img')
const name = document.querySelector('#name')
const designation = document.querySelector('#designation')
const description = document.querySelector('#description')

let num = 0

let item = banday[num]

function showPerson(banda) {
    console.log(banda)
    img.src = banda.imgSrc
    name.textContent = banda.name
    description.textContent = banda.description
    designation.textContent = banda.designation
}

showPerson(item)

function forward() {
    if (num == banday.length - 1) {           ///haaroon per puhanch gaey
        num = 0           // -1
    } else {
        num++            //0
    }
    console.log(num, "==>>num")
    item = banday[num]
    showPerson(item)
}
function backward() {
    if (num == 0) {
        num = banday.length  //5
    }
    num--   //4
    item = banday[num]
    showPerson(item)
}