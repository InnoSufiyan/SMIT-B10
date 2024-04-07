import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../Redux/Slices/userSlice";
import { themeHandler } from "../Redux/Slices/themeSlice";

const Navbar = () => {
    const dispatch = useDispatch()                             //slice/reducers main data le kar jaana
    const theme = useSelector(state => state.theme.theme)   //store sey data laana
    const data = useSelector(state => state.user.user)  //store sey data laana
    console.log(data, "==>> data")



    const login = false;
    return (
        <nav>
            <h1>Navbar</h1>
            <ul>
                <li> <Link to="/signin">
                    Sign in
                </Link></li>
                <li> <Link to="/">
                    Home
                </Link></li>
                <li>
                    <Link to="/jobs">
                        Jobs
                    </Link>
                </li>
                {
                    data && (
                        <li>
                            <Link to="/profile/:id">
                                {data.userName}
                            </Link>
                        </li>
                    )
                }
                <li onClick={() => dispatch(logoutUser())}>
                    logout
                </li>
                <li onClick={() => dispatch(themeHandler())}>
                    {theme ? 'Light' : 'Dark'}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar