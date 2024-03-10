import axios from "axios"
import { useEffect, useState } from "react"

export const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const getData = async () => {
        setLoader(true)
        try {
            const data = await axios.get(url)
            console.log(data, "===>> categories")
            setData(data?.data?.data)
            setLoader(false)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return {data, loader}
}