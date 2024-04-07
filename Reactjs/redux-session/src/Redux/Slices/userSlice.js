import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: '',
    loading: false,
    error: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserPending: (state) => {
            state.loading = true
        },
        getUserSuccess: (state, { payload }) => {
            state.user = payload
            // state.token = payload.token
            state.loading = false
            state.error = ''
        },
        getUserFailure: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        logoutUser: (state) => {
            state.user = null
            state.token = ''
        }
    },
})

const { actions, reducer } = userSlice

export const { getUserPending, getUserSuccess, getUserFailure, logoutUser } = actions

export default reducer