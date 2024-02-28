import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function PeopleProfile() {
    const {userId} = useParams()
    console.log(userId)

    // function getUser(userId) {
    //     const response = axios.get(`backendapi/${userId}`)
        
    // } 

    // useEffect(()=> {
    //     getUser(userId)
    // }, [])



    return (
        <>
            <h1>Main hun {userId} Page</h1>
            <Link to='/'><button>Home</button></Link>
        </>
    )
}