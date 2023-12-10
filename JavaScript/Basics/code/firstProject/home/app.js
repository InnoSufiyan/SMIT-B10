const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

if (!loggedInUser) window.location.href = '../login/index.html'

// const userName = document.getElementById('userName')

// userName.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).userName

const postInput = document.querySelector('#postInput')

const postContentArea = document.querySelector('#postContentArea')

const submitBtn = document.querySelector('#submitBtn')

let imageUrl;
let oldPost;
let oldPostIndex;

const postsLocalStorage = JSON.parse(localStorage.getItem('posts')) || []

// postsLocalStorage.reverse().filter((ele)=> ele.userDetail.email == JSON.parse(localStorage.getItem('loggedInUser')).email)

const postDisplayHandler = () => {
    postContentArea.innerHTML = ""

    const postsLocalStorage = JSON.parse(localStorage.getItem('posts')) || []

    console.log(postsLocalStorage, "===>>>postsLocalStorage")

    postsLocalStorage.reverse().forEach(post => {
        let textHTML;
        if (post?.imgData) {
            textHTML = `
            <div class="card text-center">
            <div class="card-header" id="userName">
                   ${loggedInUser.email === post?.userDetail.email ? `<button onclick="editHandler(${post?.id})">Edit</button> ${post?.userDetail.userName} <button onclick="deleteHandler(${post?.id})">Delete</button>` : `${post?.userDetail.userName}`} 
                </div>
            <div class="card">
  <div class="card-body">
    <h5 class="card-title">Special Post</h5>
    <p class="card-text">${post?.textData}</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
  <img src='${post?.imgData}' class="card-img-bottom" alt="...">
</div>
</div>
            `
        } else {
            textHTML = `
                <div class="card text-center">
                <div class="card-header" id="userName">
                   ${loggedInUser.email === post?.userDetail.email ? `<button onclick="editHandler(${post?.id})">Edit</button> ${post?.userDetail.userName} <button onclick="deleteHandler(${post?.id})">Delete</button>` : `${post?.userDetail.userName}`} 
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special Post</h5>
                    <p class="card-text">${post?.textData}.</p>
                </div>
                <div class="card-footer text-body-secondary">
                    2 days ago
                </div>
            </div>
                `
        }

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

const editHandler = (postId) => {
    console.log("edit handler working properly", postId)
    const postsLocalStorage = JSON.parse(localStorage.getItem('posts'))
    console.log(postsLocalStorage, "====>> postsLocalStorage")

    const findPost = postsLocalStorage.find((post) => post.id === postId)
    const findPostIndex = postsLocalStorage.findIndex((post) => post.id === postId)

    console.log(findPost, "====>>> findPost")

    oldPost = findPost
    oldPostIndex = findPostIndex

    postInput.value = findPost.textData



    submitBtn.innerHTML = "Update"

    submitBtn.setAttribute('onclick', "updatePostHandler()")
}
const deleteHandler = (postId) => {
    console.log("delete handler working properly", postId)
    const forDelete = JSON.parse(localStorage.getItem('posts'))
    const filteredData = forDelete.filter((post) => post.id != postId)
    console.log(filteredData, "===>> filteredData")
    localStorage.setItem('posts', JSON.stringify(filteredData))
    postDisplayHandler()
}

const updatePostHandler = () => {
    console.log("update post handler working")

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

    console.log(postObj, "====>>>postObj")

    const newUpdatePostData = {
        id: oldPost?.id,

        textData: postObj.textData || oldPost.textData,

        //textData: condition ? implement1 : implement2

        imgData: postObj.imgData || oldPost.imgData,

        userDetail: JSON.parse(localStorage.getItem('loggedInUser'))
    }

    console.log(newUpdatePostData, "===>>>>newUpdatePostData")

    const postsLocalStorage = JSON.parse(localStorage.getItem('posts'))

    postsLocalStorage.splice(oldPostIndex, 1, newUpdatePostData)

    console.log(postsLocalStorage, "===>>> postLocalStorage")

    localStorage.setItem('posts', JSON.stringify(postsLocalStorage))

    postDisplayHandler()

    submitBtn.innerHTML = "Submit"

    submitBtn.setAttribute('onclick', "postSubmitHandler()")
}