import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
    loading: false,
    error: '',
}

const userSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        getCategoriesPending: (state) => {
            state.loading = true
        },
        getCategoriesSuccess: (state, { payload }) => {
            state.categories = payload
            // state.token = payload.token
            state.loading = false
            state.error = ''
        },
        getCategoriesFailure: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
})

const { actions, reducer } = userSlice

export const { getCategoriesPending, getCategoriesSuccess, getCategoriesFailure } = actions

export default reducer