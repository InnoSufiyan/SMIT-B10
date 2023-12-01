const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

if (!loggedInUser) window.location.href = '../login/index.html'

// const userName = document.getElementById('userName')

// userName.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).userName

const postInput = document.querySelector('#postInput')

const postContentArea = document.querySelector('#postContentArea')

let imageUrl;

const postsLocalStorage = JSON.parse(localStorage.getItem('posts')) || []

// postsLocalStorage.reverse().filter((ele)=> ele.userDetail.email == JSON.parse(localStorage.getItem('loggedInUser')).email)

const postDisplayHandler = () => {
    postContentArea.innerHTML = ""

    postsLocalStorage.reverse().forEach(element => {
        const textHTML = `
        <div class="card text-center">
        <div class="card-header" id="userName">
            ${element.userDetail.userName}
        </div>
        <div class="card-body">
            <h5 class="card-title">Special Post</h5>
            <p class="card-text">${element.textData}.</p>
        </div>
        <div class="card-footer text-body-secondary">
            2 days ago
        </div>
    </div>
        `

    postContentArea.innerHTML += textHTML
    });
}

postDisplayHandler()

// <a href="#" class="btn btn-primary">Go somewhere</a>

const imageOpenerHandler = () => {
    imageUrl = prompt("Post the link of your image")
}

const postSubmitHandler = () => {
    let postObj
    console.log(postInput.value, "===>>>postInput")
    if (imageUrl) {
        console.log(imageUrl, "====>>imageUrl")
        postObj = {
            textData: postInput.value,
            imgData: imageUrl,
            userDetail: JSON.parse(localStorage.getItem('loggedInUser'))
        }
    } else {
        postObj = {
            textData: postInput.value,
            userDetail: JSON.parse(localStorage.getItem('loggedInUser'))
        }
    }

    postsLocalStorage.push(postObj)

    localStorage.setItem('posts', JSON.stringify(postsLocalStorage))

    imageUrl = ""

    postInput.value = ""

    postDisplayHandler()
}

const logoutHandler = () => {
    localStorage.removeItem('loggedInUser')

    window.location.href = '../login/index.html'
}