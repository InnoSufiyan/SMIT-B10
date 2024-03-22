import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = (url) => {


    const [data, setData] = useState();

    const getData = async () => {
        const response = await axios.get(url);
        console.log(response, "==>> response")
        setData(response.data.data);
    }

    useEffect(() => {
        getData();
        console.log('sadada')
    }, [url]);

    return { data }
} 