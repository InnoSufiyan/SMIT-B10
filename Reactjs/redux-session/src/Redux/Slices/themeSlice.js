import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: false
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeHandler: (state) => {
            state.theme = !state.theme
        },

    },
})

const { actions, reducer } = themeSlice

export const { themeHandler } = actions

export default reducer