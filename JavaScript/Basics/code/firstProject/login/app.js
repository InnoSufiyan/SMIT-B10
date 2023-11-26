const email = document.getElementById('email')
const password = document.getElementById('password')

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

if(loggedInUser) window.location.href = '../home/index.html'



const loginHandler = () => {

    const users = JSON.parse(localStorage.getItem('users'))

    //checking fields
    if (!email.value || !password.value) return alert('Saari fields likh bhai')
    //checking length

    if (password.value.length < 8) return alert('password length should be atleast 8 characters')

    if (!users) return alert("Sorry no user found")

    const foundUser = users.find(user => {
        if (user.email === email.value) return user
    });

    if (!foundUser) return alert('No user found')

    if (foundUser.password !== password.value) return alert("Invalid Credentials")

    alert("Login Successfully, diverting you to the home page")

    localStorage.setItem('loggedInUser', JSON.stringify(foundUser))

    setTimeout(() => {
        window.location.href = '../home/index.html'
    }, 2000)





}