export default function FriendsList({ friendsArr }) {
    return (
        <div>
            {
                friendsArr?.map((frnd, index) => <Friend key={index} frnd={frnd} />)
            }
        </div>
    )
}

function Friend({ frnd }) {

    

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "2px solid black",
            padding: "10px",
            marginBottom: '10px',
            borderRadius: '10px'
        }}>
            <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                overflow: "hidden"
            }}>
                <img width={"100%"} height={"100%"} src={frnd.imgSrc} />
            </div>
            <div>
                <p>{frnd.name}</p>
                <p>{frnd.name} ney {frnd.paisay} udhar {frnd.paisay > 0 ? "lenay" : "dena"} hain</p>
            </div>
            <button>Select</button>
        </div>
    )
}