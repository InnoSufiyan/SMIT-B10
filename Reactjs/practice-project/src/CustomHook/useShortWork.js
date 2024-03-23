import axios from "axios"
import { useEffect, useState } from "react"

export const useShortWork = () => {
    const [categories, setCategories] = useState()
    const [jobs, setJobs] = useState()

    const getCategories = () => {
        const res = axios.get('')
        setCategories(res.data)

    }
    const getJobs = () => {
        const res = axios.get('')
        setJobs(res.data)
    }
    useEffect(() => {
        getCategories()
        getJobs()
    }, [])

    return { categories, jobs }
}