import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    jobs: [],
    loading: false,
    error: '',
}

const userSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        getJobsPending: (state) => {
            state.loading = true
        },
        getJobsSuccess: (state, { payload }) => {
            state.jobs = payload
            // state.token = payload.token
            state.loading = false
            state.error = ''
        },
        getJobsFailure: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
})

const { actions, reducer } = userSlice

export const { getJobsPending, getJobsSuccess, getJobsFailure } = actions

export default reducer