import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";

export const Navbar = () => {
    const { state, dispatch } = useContext(GlobalContext)
    const logoutHandler = () => {
        dispatch({
            type: 'logout'
        })
    }

    return (
        <div id="navBar">
            <ul style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <li style={{
                    marginRight: '10px',
                    listStyle: 'none',
                }}>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li style={{
                    marginRight: '10px',
                    listStyle: 'none',
                }}>
                    <Link to="/jobsearch">
                        Job Search
                    </Link>
                </li>
                <li style={{
                    marginRight: '10px',
                    listStyle: 'none',
                }}>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
                <li style={{
                    marginRight: '10px',
                    listStyle: 'none',
                }}>
                    <Link to="/jobcreatepage">
                        Job Create Page
                    </Link>
                </li>
                <li onClick={logoutHandler}>
                    Logout
                </li>
            </ul>
        </div>
    );
}