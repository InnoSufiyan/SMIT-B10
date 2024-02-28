import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Main hun Home Page</h1>
            <Link to="/jobssearch"><button>Jobs</button></Link>
        </>
    )
}