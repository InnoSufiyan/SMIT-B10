const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

if (!loggedInUser) window.location.href = '../login/index.html'

const { userName, email, desc, pNumber, hobbies, profileUrl, id } = loggedInUser

const userNameHtml = document.querySelector('#userName')
const descHtml = document.querySelector('#desc')
const emailHtml = document.querySelector('#email')
const pNumberHtml = document.querySelector('#pNumber')
const hobbiesHtml = document.querySelector('#hobbies')
const profilePictureHtml = document.querySelector('#profilePicture2')

const userNameInput = document.querySelector('#userNameInput')
const emailInput = document.querySelector('#emailInput')
const phoneNumberInput = document.querySelector('#phoneNumberInput')
const hobbiesInput = document.querySelector('#hobbiesInput')
const imageInput = document.querySelector('#imageInput')
const descriptionInput = document.querySelector('#descriptionInput')


userNameHtml.innerHTML = `${userName.slice(0, 1).toUpperCase()}${userName.slice(1).toLowerCase()}`

descHtml.innerHTML = desc ? desc : "No Description Updated"
emailHtml.innerHTML = email ? email : "No Email Updated"
pNumberHtml.innerHTML = pNumber ? pNumber : "No Phone Number Updated"
hobbiesHtml.innerHTML = hobbies ? hobbies : "No hobbies Updated"

if(profileUrl) {
    profilePictureHtml.src = profileUrl
}

userNameInput.value = userName ? userName : ''
emailInput.value = email ? email : ''
phoneNumberInput.value = pNumber ? pNumber : ''
hobbiesInput.value = hobbies ? hobbies : ''
imageInput.value = profileUrl ? profileUrl : ''
descriptionInput.value = desc ? desc : ''


const updateProfileHandler = () => {
    const userObj = {
        userName: userNameInput.value,
        email: emailInput.value,
        pNumber: phoneNumberInput.value,
        hobbies: hobbiesInput.value.split(','),
        profileUrl: imageInput.value,
        desc: descriptionInput.value
    }

    console.log(userObj, "=====>>> userObj")

    const users = JSON.parse(localStorage.getItem('users'))

    let myUser = users.find((user) => {
        return user.id === id
    })

    myUser.userName = userNameInput.value,
    myUser.email = emailInput.value,
    myUser.pNumber = phoneNumberInput.value,
    myUser.hobbies = hobbiesInput.value.split(','),
    myUser.profileUrl = imageInput.value,
    myUser.desc = descriptionInput.value

    console.log(users, "===>>> users")

    console.log(myUser, "-===>> myUser")

    localStorage.setItem('loggedInUser', JSON.stringify(userObj))
    localStorage.setItem('users', JSON.stringify(users))
}

const logoutHandler = () => {
    localStorage.removeItem('loggedInUser')

    window.location.href = '../login/index.html'
}