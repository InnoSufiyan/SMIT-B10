import { Link, useParams } from "react-router-dom";

export default function PeopleSearch() {

    const users = [
        { name: "Haroon", experience: 5, designation: "Fool Stack Developer" },
        { name: "Ehtisham", experience: 5, designation: "Fool Stack Developer" },
        { name: "Sufiyan", experience: 5, designation: "Fool Stack Developer" },
        { name: "Kamran", experience: 5, designation: "Fool Stack Developer" },
    ]


    return (
        <>
            <h1>Main hun PeopleSearch Page</h1>

            {
                users.map(user => (
                    <Link to={`/peoplesearch/${user?.name}`}>
                        <div style={{
                            border: "2px solid black",
                            padding: "10px",
                            margin: "10px"
                        }}>
                            <h1>{user.name}</h1>
                            <h3>{user.designation}</h3>
                            <p>{user.experience}</p>
                        </div>
                    </Link>
                ))
            }

            <Link to='/'><button>Home</button></Link>
        </>
    )
}