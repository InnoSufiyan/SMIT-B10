import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
    const userLogin = true
    const pageChangeHandler = ()=> {
        if(userLogin) {
            navigate('/jobPostingPage')
        } else {
            alert("ponka , password username ghalat hai")
        }
    }
    return (
        <>
            <h1>Main hun Home Page</h1>
            <Link to="/jobssearch"><button>Jobs</button></Link>
            <button onClick={pageChangeHandler}>People Search Page</button>

        </>
    )
}