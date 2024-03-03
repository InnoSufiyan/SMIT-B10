import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function Jobs() {

    const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams();
    const [jobs, setJobs] = useState([])
    const [internship, setInternship] = useState(false)
    const [fresher, setFresher] = useState(false)

    const internshipSwitcher = () => {
        setInternship(!internship)
        navigate('/jobssearch?filter=Internship')
    }
    const fresherSwitcher = () => {
        setFresher(!fresher)
        navigate('/jobssearch?filter=Fresher')
    }


    const getJobs = async (url) => {
        const { data } = await axios.get(url)
        console.log(data, "===>> data")
        setJobs(data.data)
    }

    useEffect(() => {
        console.log("===>>useEffect chala")
        if (searchParams.get("filter")) {
            console.log("filteration mili")
            getJobs(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&filteration=${searchParams.get("filter")}&keyWord=&category=`)
        } else {
            console.log("filteration nahin mili")

            getJobs('https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=')
        }
        console.log(searchParams.get("filter"))
    }, [searchParams])
    return (
        <>
            <h1>Main hun Jobs Page</h1>
            <Link to='/'><button>Home</button></Link>
            <div>
                Filteration
            </div>
            <button onClick={internshipSwitcher}>
                internship {internship ? 'ON' : 'OFF'}
            </button>
            <button onClick={fresherSwitcher}>
                fresher {fresher ? 'ON' : 'OFF'}
            </button>
            {
                jobs.map((job, index) => (
                    <div>
                        <h1>{job?.designation}</h1>
                        <h3>{job?.desc}</h3>
                        <div style={{ display: "flex", gap: '20px' }}>
                            {
                                job?.skills?.map((skill) => (
                                    <p style={{
                                        border: "2px solid blue",
                                        padding: "10px 20px",
                                        borderRadius: "30px"
                                    }}>{skill}</p>
                                ))
                            }
                        </div>

                    </div>
                ))
            }
        </>
    )
}