import { useState } from "react"

export default function AddFriend({ friendsArr, setFriendsArr }) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")

    const addFriend = () => {
        console.log(name,
            image, "add friend function")
        const meraFrndArr = [...friendsArr]
        meraFrndArr.push({
            name: name, imgSrc: image, paisay: "0"
        })
        setFriendsArr(meraFrndArr)
    }

    return (
        <div>
            <div>
                <p>
                    Friend's Name
                </p>
                <input onChange={(e) => setName(e.target.value)} placeholder="Haroon" />
            </div>
            <div>
                <p>
                    Image Url
                </p>
                <input onChange={(e) => setImage(e.target.value)} placeholder="Image Source" />
            </div>
            <button onClick={addFriend}> Add </button>
        </div>
    )
}