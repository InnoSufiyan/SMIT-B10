import { useEffect, useReducer, useState } from "react"

const initialState = {
    darkTheme: false,
    login: false,
    jobs: [],
    categories: []
}

const reducer = (state, action) => {
    if (action.type == "themeChanger") {
        return { ...state, darkTheme: !state.darkTheme }
    } else if (action.type == "login") {
        return { ...state, login: true }
    } else if (action.type == "logout") {
        return { ...state, login: false }
    } else if (action.type == "jobs") {
        return { ...state, jobs: ["asdasdsad"] }
    } else if (action.type == "categories") {
        return { ...state, categories: ["dasdasdsdsafasfaff"] }
    } else {
        return { ...state, error: "Wrong Type" }
    }
}

export const TodoListReducer = () => {
    // const [counter, setCounter] = useState(0)
    const [statee, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            {
                statee.darkTheme ? "DarkTheme" : "LightTheme"
            }
            <button onClick={() => dispatch({ type: "themeChanger" })}>Dark/Light</button>

            <button onClick={() => dispatch({
                type: "login"
            })}>Login</button>
            {
                statee.login ? "User is logged in" : "User is logged out"
            }
            <button onClick={() => dispatch({
                type: "logout"
            })}>Logout</button>
        </>
    )
}