import axios from "axios";
import { useEffect, useState } from "react";
import { useSufiyan } from "../CustomHook/UseSufiyan";

export const CustomHookLearning = () => {
    const [count, setCount] = useState(0);
    const { data: categories, loading: categoriesLoading, error: errorLoading } = useSufiyan('https://backend-prod.app.hiringmine.com/api/categories/all');
    const { data, loading, error } = useSufiyan('https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=');
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}