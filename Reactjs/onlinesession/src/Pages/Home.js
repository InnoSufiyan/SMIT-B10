import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Component/Navbar";
import { useFetchData } from "../CustomHook/useDataFetch";

export const Home = () => {

    const { data: categories } = useFetchData('https://backend-prod.app.hiringmine.com/api/categories/all');
    const { data: jobs } = useFetchData('https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=12&pageNo=1&keyWord=&category=');



    return (
        <div>
            <Navbar />
            <div>
                <h1 style={{
                    textAlign: 'center'
                }}>Categories</h1>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap"
                }}>

                    {
                        categories.slice(0, 6)?.map((category) => (
                            <div key={category._id} style={{
                                border: "1px solid #000",
                                padding: "10px",
                                margin: "10px",
                                width: "30%"
                            }}>
                                <h3>{category.name}</h3>
                                <p>{category.description}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
            <div>
                <h1 style={{
                    textAlign: 'center'
                }}>Latest Jobs</h1>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap"
                }}>

                    {
                        jobs.slice(0, 12)?.map((job) => (
                            <div key={job._id} style={{
                                border: "1px solid #000",
                                padding: "10px",
                                margin: "10px",
                                width: "30%"
                            }}>
                                <h3>{job.designation}</h3>
                                <p>{job.companyName || 'Anonymous'}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}