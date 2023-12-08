const userName = document.getElementById('userName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cPassword = document.getElementById('cPassword')

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

if(loggedInUser) window.location.href = '../home/index.html'

const signupHandler = () => {

    const users = JSON.parse(localStorage.getItem('users')) || []
    console.log(users, "-====>>> users")
    
    //checking fields
    if (!userName.value || !email.value || !password.value || !cPassword.value) return alert('Saari fields likh bhai')
    //checking length

    if (password.value.length < 8) return alert('password length should be atleast 8 characters')
    //checking password and cPassword
    if (password.value != cPassword.value) return alert('same password confirm password likh bhai')

    const userNameFound = users.find((user)=> {
        if(user.userName === userName.value) return user
    })

    if(userNameFound) return alert("UserName already taken")
    
    const userEmailFound = users.find((user)=> {
        if(user.email === email.value) return user
    })

    if(userEmailFound) return alert("UserEmail already exist")




    const user = {
        id: Date.now(),
        userName: userName.value,
        email: email.value,
        password: password.value,
        cPassword: cPassword.value
    }

    users.push(user)

    localStorage.setItem("users", JSON.stringify(users))



    alert("Signup Successfully, now you can login, diverting you to the login page")
    setTimeout(() => {
        window.location.href = '../login/index.html'
    }, 2000)
}