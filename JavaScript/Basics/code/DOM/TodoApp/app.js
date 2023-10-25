const listItemInput = document.querySelector('#listItemInput') //element
const myUnOrderedList = document.querySelector('ul')

console.log(myUnOrderedList.innerHTML)

function submitHandler() {
    let val = listItemInput.value
    const li = `
    <li id=${val}>
    ${val}
    <div>
        <span class="listButton" id="edit" onclick="editHandler('${val}')">edit</span>
        <span class="listButton" id="delete" onclick="deleteHandler('${val}')">delete</span>
    </div>
</li>
`
    myUnOrderedList.innerHTML += li
    listItemInput.value = ""
    // const li = document.createElement('li')
    // const btn1 = document.createElement('span')
    // const btn2 = document.createElement('span')
    // console.log(li)
    // console.log(btn1)
    // console.log(btn2)
    // li.textContent = listItemInput.value
    // btn1.innerText = "edit"
    // btn2.innerText = "delete"
    // li.appendChild(btn1)
    // li.appendChild(btn2)
    // btn1.classList.add('listButton')
    // btn2.classList.add('listButton')

    // myUnOrderedList.appendChild(li)
}

function editHandler(val) {
    console.log(val)
}
function deleteHandler(val) {
    const li = document.getElementById(val)
    console.log(li)
    li.remove()
}