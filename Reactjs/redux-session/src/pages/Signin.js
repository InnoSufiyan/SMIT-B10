import { useState } from "react";
import Navbar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getUserPending, getUserSuccess } from "../Redux/Slices/userSlice";

const Signin = () => {
    const dispatch = useDispatch()                             //slice/reducers main data le kar jaana
    const loading = useSelector(state => state.user.loading)   //store sey data laana

    console.log(loading, "===>> loading")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInHandler = () => {
        dispatch(getUserPending())
        //api hit karwai

        const response = {
            userName: "Haroon",
            profilePic: "https://pbs.twimg.com/media/Dpc4xHEWkAAjsBd.jpg"
        }
        dispatch(getUserSuccess(response))

    }

    return (
        <div>
            {loading ? <h1>Loading...</h1> : (
                <>
                    <h1>Signin</h1>
                    <Navbar />
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={signInHandler}>Sign in</button>
                </>
            )}
        </div>
    );
};

export default Signin