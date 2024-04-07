import { useEffect } from "react";
import Navbar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesPending, getCategoriesSuccess } from "../Redux/Slices/categoriesSlice";
import axios from "axios";

const Home = () => {

    const dispatch = useDispatch()
    const { loading, categories } = useSelector(state => state.categories)
    const categoriesFetch = async () => {
        dispatch(getCategoriesPending())
        const response = await axios.get('https://backend-prod.app.hiringmine.com/api/categories/all')
        dispatch(getCategoriesSuccess(response.data.data))
        console.log(response, "===>> response")
    }

    useEffect(() => {

        categoriesFetch()

    }, [])


    return (
        <div>
            <Navbar />
            <h1>Home</h1>
            {
                loading ? <h1>Loading...</h1> : (
                    <ul>
                        {
                            categories.map((item, index) => (
                                <li key={index}>{item.name}</li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    );
}

export default Home