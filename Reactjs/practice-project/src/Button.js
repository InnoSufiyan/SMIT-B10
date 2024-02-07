import { useState } from "react"

export default function Button({ bgColor, name }) {          //props is an object
    
    // const [namee, setNamee] = useState(name)    //haroon

    // setNamee("shakoor")
    
    return (
        <button style={
            {
                backgroundColor: bgColor,
                color: "white",
                padding: "5px",
                marginLeft: '3px',
                borderRadius: "5px"
            }
        }>{name}</button>
    )
}