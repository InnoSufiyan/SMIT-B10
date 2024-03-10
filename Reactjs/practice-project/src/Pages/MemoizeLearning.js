import { useCallback, useEffect, useMemo, useState } from "react"
import { CategoriesComponent } from "../Components/CategoriesComponent"
import { LatestJobsComponent } from "../Components/LatestJobsComponent"
import axios from "axios"
import { useFetchData } from "../CustomHook/UsefetchData"

export const MemoizeLearning = () => {
    const { data: categories, loader: loadingCategories } = useFetchData(`https://backend-prod.app.hiringmine.com/api/categories/all`)

    const { data: latestJobs, loader: loadingLatestJobs } = useFetchData(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=`)



    // const [darkTheme, setDarkTheme] = useState(true)
    // const objectt = useMemo(() => {
    //     return [{
    //         name: "sufiyan"
    //     }]
    // }, [])
    // const meraFunction = useCallback(() => {
    //     return () => {
    //         console.log('dasdadas')
    //     }
    // }, [])

    return (
        <>
            <h1>
                Hiring Mine
            </h1>
            <CategoriesComponent categories={categories} loader={loadingCategories} />
            <LatestJobsComponent latestJobs={latestJobs} loader={loadingLatestJobs} />
        </>

    )
}