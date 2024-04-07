import { useEffect } from "react";
import Navbar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getJobsPending, getJobsSuccess } from "../Redux/Slices/jobsSlice";
import axios from "axios";

const Jobs = () => {

    const dispatch = useDispatch()
    const { loading, jobs, error } = useSelector(state => state.jobs)

    const jobsFetch = async () => {
        console.log("jobsFetch")
        dispatch(getJobsPending())
        const response = await axios.get('https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=')
        console.log(response, "===>> response")
        dispatch(getJobsSuccess(response.data.data))
    }

    useEffect(() => {
        jobsFetch()
    }, [])

    return (
        <div>
            <Navbar />
            <h1>Jobs</h1>
        </div>
    );
}


export default Jobs