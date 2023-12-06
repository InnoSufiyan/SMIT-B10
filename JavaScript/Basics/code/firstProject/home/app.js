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

    const postsLocalStorage = JSON.parse(localStorage.getItem('posts')) || []

    postsLocalStorage.reverse().forEach(element => {
        const textHTML = `
            <div class="card text-center">
            <div class="card-header" id="userName">
               ${loggedInUser.email === element.userDetail.email ? `<button onclick="editHandler(${element.id})">Edit</button> ${element.userDetail.userName} <button onclick="deleteHandler(${element.id})">Delete</button>` : `${element.userDetail.userName}`} 
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
            id: Date.now(),
            textData: postInput.value,
            imgData: imageUrl,
            userDetail: JSON.parse(localStorage.getItem('loggedInUser'))
        }
    } else {
        postObj = {
            id: Date.now(),
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

const editHandler = () => {
    console.log("edit handler working properly")
}
const deleteHandler = (postId) => {
    console.log("delete handler working properly", postId)
    const forDelete = JSON.parse(localStorage.getItem('posts'))
    const filteredData = forDelete.filter((post) => post.id != postId)
    console.log(filteredData, "===>> filteredData")
    localStorage.setItem('posts', JSON.stringify(filteredData))
    postDisplayHandler()
}