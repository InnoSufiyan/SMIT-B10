import { useEffect, useState } from "react";
import { Navbar } from "../Component/Navbar";
import { useFetchData } from "../CustomHook/useDataFetch";
import { Link } from "react-router-dom";

export const JobSearch = () => {

    const [page, setPage] = useState(1)

    const { data: jobs } = useFetchData(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=9&pageNo=${page}&keyWord=&category=`)

    useEffect(() => {
        console.log(page, "===>> page")
    }, [page])

    return (
        <div>
            <Navbar />
            <div>
                <h1 style={{
                    textAlign: 'center'
                }}>Latest Jobs</h1>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap"
                }}>

                    {
                        jobs?.map((job) => (
                            <Link to={`/jobsearch/${job._id}`} key={job._id} style={{
                                border: "1px solid #000",
                                padding: "10px",
                                margin: "10px",
                                width: "30%"
                            }}>
                                <h3>{job.designation}</h3>
                                <p>{job.companyName || 'Anonymous'}</p>
                            </Link>
                        ))
                    }
                </div>

            </div>
            <div id="paginationButtons" style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <button onClick={() => setPage(page - 1)} style={{
                    padding: "10px",
                    margin: "10px",
                    width: "100px",
                    backgroundColor: "#000",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                }}>Prev</button>
                <button onClick={() => setPage(page + 1)} style={{
                    padding: "10px",
                    margin: "10px",
                    width: "100px",
                    backgroundColor: "#000",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                }}>Next</button>
            </div>
        </div>
    );
}