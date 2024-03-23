import axios from "axios"
import { useEffect, useReducer, useState } from "react"

const initialState = {
    jobs: [],
    categories: [],
    filterations: [],
    error: null
}

const reducer = (state, action) => {
    console.log(action.type, "==>>type")
    console.log(action.payload, "==>>payload")

    if (action.type == 'jobs') {
        return { ...state, jobs: action.payload }
    } else if (action.type == 'categories') {
        return { ...state, categories: action.payload }
    } else if (action.type == 'filterations') {
        return { ...state, filterations: action.payload }
    } else {
        return {
            ...state, error: "Ponka , this type is not justified"
        }
    }
}

export const HiringMineUseReducer = () => {
    // const [categories, setCategories] = useState([])
    // const [jobs, setJobs] = useState([])
    // const [filterations, setFilterations] = useState([])

    const [data, dispatch] = useReducer(reducer, initialState)

    const getJobs = async () => {

        const res = await axios.get('https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=')
        // setJobs(res.data.data)
        dispatch({ type: 'jobs', payload: res.data.data })
    }
    const getCategories = async () => {
        const res = await axios.get('https://backend-prod.app.hiringmine.com/api/categories/all')
        // setCategories(res.data.data)
        dispatch({ type: 'categories', payload: res.data.data })
    }
    const getFilterations = async () => {
        const res = await axios.get('https://maroon-shorts.cyclic.cloud/api/filterations/all')
        // setFilterations(res.data.data)
        dispatch({ type: 'filterations', payload: res.data.data })
    }


    useEffect(() => {
        getJobs()
        getCategories()
        getFilterations()
    }, [])

    return (
        <>
            HiringMine Home Page
            <div>
                <h1 style={{ textAlign: 'center' }}>Categories</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', }}>

                    {
                        data.categories?.slice(0, 6).map((category) => (
                            <div style={{ width: "20%", border: "2px solid black", padding: '50px' }}>
                                <h3>{category.name}</h3>
                                <p>{category.postCounts}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <h1 style={{ textAlign: 'center' }}>Jobs</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', }}>

                    {
                        data.jobs?.map((job) => (
                            <div style={{ width: "20%", border: "2px solid black", padding: '50px' }}>
                                <h3>{job.companyName || 'Anonymous'}</h3>
                                <h2>{job.designation || 'Anonymous'}</h2>
                                <p>{job.payRangeStart || 'No Salary Mentioned'} {job.payRangeEnd}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}