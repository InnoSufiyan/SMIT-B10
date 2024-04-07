import { createContext } from "react"

export const initialState = {
    categories: [],
    jobs: [],
    jobDetail: {},
    theme: 'light',
    login: false
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        case 'SET_JOBS':
            return {
                ...state,
                jobs: action.payload
            }
        case 'SET_JOB_DETAIL':
            return {
                ...state,
                jobDetail: action.payload
            }
        case 'SET_THEME':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
        case 'SET_LOGIN':
            return {
                ...state,
                login: true
            }
        case 'SET_LOGOUT':
            return {
                ...state,
                login: false
            }
        default:
            return state;
    }
}

//1. Create a context
//2. Create a provider
//3. Consume the context

export const MyContext = createContext();