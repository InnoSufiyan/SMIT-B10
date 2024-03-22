import { Link } from "react-router-dom";

export const Navbar = () => {
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
            </ul>
        </div>
    );
}