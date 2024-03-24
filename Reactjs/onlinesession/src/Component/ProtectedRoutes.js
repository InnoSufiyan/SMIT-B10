import { useContext } from "react"
import { GlobalContext } from "../App"
import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedRoutes() {

    const { state, dispatch } = useContext(GlobalContext)

    console.log(state, "==>> state")


    return state.user ? <Outlet /> : <Navigate to={"/"} />
}