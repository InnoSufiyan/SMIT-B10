import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Component/Navbar";
import { useFetchData } from "../CustomHook/useDataFetch";
import { GlobalContext } from "../App";

export const Login = () => {

    const { state, dispatch } = useContext(GlobalContext)

    const loginHandler = () => {
        dispatch({
            type: 'login'
        })
    }


    return (
        <div>
            <Navbar />
            <button onClick={loginHandler}>Login</button>
        </div>
    );
}