console.log("asdasdsdad")

var userEmail = "inno@mail.com"
var userPassword = "12345678"


//signup values
var firstName = document.getElementById('firstName')
var lastName = document.getElementById('lastName')
var userName = document.getElementById('userName')
var email = document.getElementById('email')
var password = document.getElementById('password')
var cPassword = document.getElementById('cPassword')


//loginValues
var loginEmail = document.getElementById('loginemail')
var loginPassword = document.getElementById('loginpassword')

// function signupHandler() {
//     if (firstName.value == "" ||
//         lastName.value == "" ||
//         userName.value == "" ||
//         password.value == "" ||
//         cPassword.value == "" ||
//         email.value == "") {
//         alert("tamaam fields ko pura kareyn")
//     } else if (password.value != cPassword.value) {
//         alert("password and confirm password are not matching")
//     } else if (email.value == userEmail) {
//         alert("Your account is already exist")
//     } else if (password.value.length < 8) {
//         alert("password should be minimum 8 characters long")
//     } else {
//         alert("User sign up successfully")
//     }


// }
function signupHandler() {

//  checking if empty value

    if (firstName.value == "" ||
        lastName.value == "" ||
        userName.value == "" ||
        password.value == "" ||
        cPassword.value == "" ||
        email.value == "") {
        return alert("tamaam fields ko pura kareyn")
    }


// password matching
    if (password.value != cPassword.value) {
        return alert("password and confirm password are not matching")
    }


// checking if already user
    if (email.value == userEmail) {
        return alert("Your account is already exist")
    }
    //true
    if (password.value.length < 8) {
        return alert("password should be minimum 8 characters long")
    }

    alert("User sign up successfully")
    window.location = './login.html'
}

function loginHandler() {
    console.log(loginEmail.value, loginPassword.value, "==>>login handler working")

    if(loginEmail.value == "" || loginPassword.value == "") {
        return alert("khaali jagah pur kareyn")
    }

    if(loginEmail.value != userEmail) {
        return alert("this user doesn't have any account, go to register and create your account")
    }
    console.log(loginPassword.value)
    console.log(loginPassword.value.length)
    if(loginPassword.value.length >= 8 && loginPassword.value == userPassword) {
       alert("User logging in successfully")
       window.location = './dashboard'
    } else {
        alert("password sahi wala likh")
    }
}