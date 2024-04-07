import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Slices/userSlice'
import categoriesSlice from './Slices/categoriesSlice'
import jobsSlice from './Slices/jobsSlice'
import themeSlice from './Slices/themeSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,     //state, action, reducer
        categories: categoriesSlice,
        jobs: jobsSlice,
        theme: themeSlice,
    },

},
    +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)