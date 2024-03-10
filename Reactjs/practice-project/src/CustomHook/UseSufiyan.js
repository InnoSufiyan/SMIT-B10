import axios from "axios";
import { useEffect, useState } from "react";

export const useSufiyan = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getJobs = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
            setLoading(false);
        }
        catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getJobs();
    }, []);

    return { data, loading, error };
}