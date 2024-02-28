export const Modal = ({ children }) => {
    return (
        <div style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                width: "50%",
                height: "50%",
                backgroundColor: "white",
                margin: "auto auto"
            }}>
                {children}
            </div>
        </div>
    )
}

export function Advertisment() {
    return (
        <>
            <img style={{
                objectFit: "cover"
            }} width={"100%"} height={"100%"} src="https://i.pinimg.com/originals/34/50/f5/3450f5074de938755727c05cfadcd42e.jpg" />
        </>
    )
}

export function WebsiteMaintenance() {
    return (
        <>
            <img style={{
                objectFit: "cover"
            }} width={"100%"} height={"100%"} src="https://www.spinxdigital.com/app/uploads/2023/01/Image-Maintenance.jpg" />
        </>
    )
}