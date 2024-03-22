import { useParams } from "react-router-dom";
import { Navbar } from "../Component/Navbar";
import { useFetchData } from "../CustomHook/useDataFetch";

export const JobDetail = () => {

    let { id } = useParams();
    const { data: jobDetail } = useFetchData(`https://backend-prod.app.hiringmine.com/api/jobAds/${id}`)

    console.log(jobDetail, "===>> jobDetail")

    return (
        <div>
            <Navbar />
            <h1>Job Detail</h1>
            <div>
                <h3>{jobDetail?.designation}</h3>
                <p>{jobDetail?.companyName || 'Anonymous'}</p>
                {/* <p>{jobDetail?.description}</p> */}
                <p>{jobDetail?.location}</p>
                <p>{jobDetail?.category.name}</p>
                <p>{jobDetail?.payRangeStart}</p>
                <p>{jobDetail?.jobType}</p>
                <p>{jobDetail?.position}</p>
                {
                    jobDetail?.skills?.map((skill) => (
                        <p style={{
                            border: "1px solid #000",
                            padding: "5px",
                            margin: "5px",
                            width: "30%"
                        }}>{skill}</p>
                    ))
                }
            </div>
        </div >
    );
} 